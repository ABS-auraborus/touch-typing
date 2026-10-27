import React from "react";
import ProgressBar from "./ProgressBar";
import Skeleton from "./Skeleton";

interface AchievementProps {
  children: string;
  imageURL: string;
  progress: number;
}

const AchievementBlock = ({children, imageURL, progress}: AchievementProps) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const HandleLoad = () => {
    setIsLoading(false);
  };

  const achievementProgress = progress;
  return (
    <li
      className={`pr-7 h-25 flex justify-between items-center shadow-block ${achievementProgress === 1 ? "bg-black-accent" : "bg-gray-accent"}`}
    >
      <div className="flex gap-3 items-center">
        <div>
          {isLoading && <Skeleton className="size-25 bg-indigo-200" />}
          <img
            src={imageURL}
            alt="Achievement Image"
            onLoad={() => HandleLoad()}
            className={`size-full ${isLoading ? "hidden" : "block"}`}
          />
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
