import React from "react";
import Container from "../components/Container";
import SelectionLine from "../sections/Training/SelectionLine";
import TextHolder from "../sections/Training/TextHolder";
import axios from "axios";

export const DataTypes = {
  words: "words",
  sentences: "sentences",
  chars: "chars",
} as const;

export const Languages = {
  ru: "RUS",
  en: "ENG",
} as const;

export const Difficulties = {
  easy: 0,
  medium: 1,
  hard: 2,
} as const;

`
==================== ДОКУМЕНТАЦИЯ К ПУЛРЕКВЕСТУ ====================
TRAINING PAGE API:
1. Делать запросы к url, получать слова/предложения/символы
2. Выводить эти данные в компонент TextHolder, обеспечить корректное отображение текста
3. Реализовать ввод букв с клавиатуры, отображение правильно и неправильно введенных букв и текстового курсора под буквой
4. Добавить визуализацию клавиатуры под текстом, отображать правильную и нажимаемую клавиши 
5. Вывести данные о скорости печати (символы / минуту и слова / минуту), о точности печати (%) и о количестве ошибок в сессии
6. Вывести данные о бонусах (баффах) в текущей сессии
`;

const TrainingPage = () => {
  const [textType, setTextType] = React.useState(DataTypes.chars);
  const [textLanguage, setTextLanguage] = React.useState(Languages.en);
  const [textDifficulty, setTextDifficulty] = React.useState(
    Difficulties.medium,
  );

  React.useEffect(() => {
    const fetchTextData = async (
      textType: string,
      textLanguage: string,
      textDifficulty: number,
    ) => {
      try {
        const response = await axios(
          `http://127.0.0.1:8000/api/v1/${textType}`,
          {
            params: {
              language: textLanguage,
              difficult: textDifficulty,
            },
          },
        );

        console.log(response);
      } catch (error) {
        console.error("Ошибка запроса слов для ввода:", error);
      }
    };

    fetchTextData(textType, textLanguage, textDifficulty);
  }, [textType, textLanguage, textDifficulty]);

  return (
    <main className="pt-10">
      <Container>
        <SelectionLine />
        <TextHolder />
      </Container>
    </main>
  );
};

export default TrainingPage;
