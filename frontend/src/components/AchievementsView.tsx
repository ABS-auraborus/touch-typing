import React, { useState } from 'react';
import { AchievementCard } from './AchievementCard';
import { Achievement } from '../types/achievements';

const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_flawless',
    title: 'Это только начало',
    description: 'Сделать один текст без ошибок',
    currentProgress: 1,
    maxProgress: 1,
    isUnlocked: true,
    icon: '🎯',
    xpReward: 100,
  },
  {
    id: 'reach_lvl5_day',
    title: 'Освобождение',
    description: 'Получить 5-ый уровень за один день',
    currentProgress: 5,
    maxProgress: 5,
    isUnlocked: true,
    icon: '⚡',
    xpReward: 300,
  },
  {
    id: 'flawless_250',
    title: 'Правильные мотивы',
    description: 'Написать 250 символов без единой ошибки',
    currentProgress: 140,
    maxProgress: 250,
    isUnlocked: false,
    icon: '🛡️',
    xpReward: 250,
  },
  {
    id: 'lazy_week',
    title: 'Тот ещё лентяй',
    description: 'Сделать паузу в неделю после захода на сайт',
    currentProgress: 0,
    maxProgress: 7,
    isUnlocked: false,
    icon: '🦥',
    xpReward: 150,
  },
  {
    id: 'wild_west_speed',
    title: 'Самый быстрый писарь на диком Западе',
    description: 'Получить скорость в 200 символов/минуту',
    currentProgress: 150,
    maxProgress: 200,
    isUnlocked: false,
    icon: '🤠',
    xpReward: 400,
  },
];

export const AchievementsView: React.FC = () => {
  const [achievements] = useState<Achievement[]>(INITIAL_ACHIEVEMENTS);
  const unlockedCount = achievements.filter((a) => a.isUnlocked).length;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 text-zinc-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-zinc-800 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Мои Достижения
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Выполняй задания во время тренировок и получай опыт
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl">
          <span className="font-mono text-cyan-400 font-bold text-lg">
            Получено: {unlockedCount} из {achievements.length}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {achievements.map((item) => (
          <AchievementCard key={item.id} achievement={item} />
        ))}
      </div>
    </div>
  );
};