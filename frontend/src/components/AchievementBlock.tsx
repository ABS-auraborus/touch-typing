import ProgressBar from "./ProgressBar";

interface AchievementProps {
  children: string;
  imageURL: string;
  progress: number;
}

const AchievementBlock = ({children, imageURL, progress}: AchievementProps) => {
  const achievementProgress = progress;
  return (
    <li
      className={`pr-7 h-25 flex justify-between items-center shadow-block ${achievementProgress === 1 ? "bg-black-main" : "bg-gray-4"}`}
    >
      <div className="flex gap-3 items-center">
        <div>
          <img src={imageURL} alt="image" className="size-full" />
        </div>
        <p className="font-jet-m text-xl">{children}</p>
      </div>
      <div className="max-w-76 w-full">
        <ProgressBar completion={achievementProgress} />
      </div>
    </li>
  );
};

export default AchievementBlock;
