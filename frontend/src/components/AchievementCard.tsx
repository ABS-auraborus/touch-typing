import React from 'react';
import { Achievement } from '../types/achievements';

export const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  const percent = Math.min(
    100,
    Math.round((achievement.currentProgress / achievement.maxProgress) * 100)
  );

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-xl border mb-3 transition-all ${
        achievement.isUnlocked
          ? 'bg-[#202025] border-cyan-500/40 shadow-[0_0_15px_rgba(0,200,255,0.08)]'
          : 'bg-[#18181c] border-zinc-800'
      }`}
    >
      {/* Иконка и текст */}
      <div className="flex items-center gap-4">
        <div
          className={`w-14 h-14 rounded-lg flex items-center justify-center text-2xl border ${
            achievement.isUnlocked
              ? 'bg-cyan-950/50 border-cyan-500/40 text-cyan-300'
              : 'bg-zinc-800/80 border-zinc-700 text-zinc-500'
          }`}
        >
          {achievement.icon}
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h4
              className={`font-bold text-base ${
                achievement.isUnlocked ? 'text-white' : 'text-zinc-300'
              }`}
            >
              {achievement.title}
            </h4>
            <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-cyan-400 font-mono">
              +{achievement.xpReward} XP
            </span>
          </div>
          <p className="text-zinc-400 text-xs mt-0.5">
            ({achievement.description})
          </p>
        </div>
      </div>

      {/* Прогресс-бар по вашему дизайну */}
      <div className="w-56 flex flex-col items-end gap-1.5">
        <div className="flex justify-between w-full text-xs font-mono">
          <span className={achievement.isUnlocked ? 'text-cyan-400 font-bold' : 'text-zinc-500'}>
            {achievement.isUnlocked ? 'Получено' : `${percent}%`}
          </span>
          <span className="text-zinc-400">
            {achievement.currentProgress} / {achievement.maxProgress}
          </span>
        </div>

        <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden p-0.5 border border-zinc-700/60">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              achievement.isUnlocked
                ? 'bg-cyan-400 shadow-[0_0_8px_rgba(0,200,255,0.6)]'
                : percent > 0
                ? 'bg-cyan-600'
                : 'bg-transparent'
            }`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
};