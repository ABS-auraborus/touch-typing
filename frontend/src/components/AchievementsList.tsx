import AchievementBlock from "./AchievementBlock";

const AchievementsList = () => {
  return (
    <ul className="mt-10 flex flex-col gap-10">
      <AchievementBlock imageURL="/public/img/achievements/1.jpg" progress={1}>
        Только начало! (Сделать один текст без ошибок)
      </AchievementBlock>
      <AchievementBlock
        imageURL="/public/img/achievements/1.jpg"
        progress={0.5}
      >
        Освобождение (Получить 5-ый уровень за один день)
      </AchievementBlock>
      <AchievementBlock
        imageURL="/public/img/achievements/1.jpg"
        progress={0.2}
      >
        Правильные мотивы (Написать 250 символов без единой ошибки)
      </AchievementBlock>
      <AchievementBlock imageURL="/public/img/achievements/1.jpg" progress={0}>
        Тот ещё лентяй (Сделать паузу в неделю после захода на сайт)
      </AchievementBlock>
    </ul>
  );
};

export default AchievementsList;
