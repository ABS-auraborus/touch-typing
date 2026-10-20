export interface Achievement {
  id: string;
  title: string;
  description: string;
  currentProgress: number;
  maxProgress: number;
  isUnlocked: boolean;
  icon: string;
  xpReward: number;
}