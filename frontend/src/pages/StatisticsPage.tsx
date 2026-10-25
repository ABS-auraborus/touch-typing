import {useState} from "react";
import Container from "../components/Container";
import Graph, {DAYS} from "../components/Graph";

const StatisticsPage = () => {
  const [lang, setLang] = useState<"ru" | "en">("ru");

  // Отдельные наборы данных для Ru и En — графики те же, цифры разные
  const [dataRu, setDataRu] = useState({
    lessons: [108, 109, 102, 87, 120, 121, 108],
    accuracy: [93.7, 93.5, 93.3, 93.6, 93.5, 92.9, 93.2],
    cpm: [159, 164, 149, 165, 170, 161, 161],
    letters: [
      {letter: "Ь", errors: 20},
      {letter: "А", errors: 19},
      {letter: "Й", errors: 18},
      {letter: "Ю", errors: 18},
      {letter: "Ф", errors: 18},
      {letter: "Ж", errors: 17},
      {letter: "З", errors: 16},
      {letter: "Б", errors: 15},
      {letter: "Э", errors: 14},
      {letter: "Ш", errors: 11},
    ],
  });
  const [dataEn, setDataEn] = useState({
    lessons: [95, 101, 88, 110, 97, 105, 92],
    accuracy: [91.2, 92.1, 90.8, 92.5, 93.1, 91.7, 92.9],
    cpm: [145, 152, 138, 155, 160, 149, 151],
    letters: [
      {letter: "T", errors: 22},
      {letter: "A", errors: 20},
      {letter: "E", errors: 19},
      {letter: "B", errors: 17},
      {letter: "C", errors: 16},
      {letter: "H", errors: 15},
      {letter: "M", errors: 13},
      {letter: "P", errors: 12},
      {letter: "O", errors: 10},
      {letter: "S", errors: 8},
    ],
  });

  // активный набор — переключается кнопками Ru/En
  const data = lang === "ru" ? dataRu : dataEn;
  const setData = lang === "ru" ? setDataRu : setDataEn;
  const {lessons, accuracy, cpm, letters} = data;
  const setLessons = (v: number[]) => setData((d) => ({...d, lessons: v}));
  const setAccuracy = (v: number[]) => setData((d) => ({...d, accuracy: v}));
  const setCpm = (v: number[]) => setData((d) => ({...d, cpm: v}));
  const setLetters = (v: Array<{letter: string; errors: number}>) =>
    setData((d) => ({...d, letters: v}));
  const [showEditor, setShowEditor] = useState(false);
  const [draft, setDraft] = useState("");

  // --- функции ввода данных: парсят строку "Пн 100, Вт 120..." или просто числа через пробел/запятую
  const parseNumbers = (text: string): number[] => {
    const nums = text
      .replace(/,/g, " ")
      .split(/[\s;]+/)
      .map((s) => s.trim().replace("%", ""))
      .filter(Boolean)
      .map(Number)
      .filter((n) => Number.isFinite(n));
    return nums;
  };

  const parseLetters = (
    text: string,
  ): Array<{letter: string; errors: number}> => {
    // формат строк: "А 39" или "А-39" или "А:39", каждая с новой строки/запятой
    const rows = text
      .split(/[\n;]+/)
      .flatMap((r) => r.split(","))
      .map((s) => s.trim())
      .filter(Boolean);
    const out: Array<{letter: string; errors: number}> = [];
    for (const row of rows) {
      const m = row.match(/([A-Za-zА-Яа-яЁёЬь]+)\s*[-: ]\s*(\d+(?:[.,]\d+)?)/);
      if (m)
        out.push({
          letter: m[1].toUpperCase(),
          errors: Number(m[2].replace(",", ".")),
        });
    }
    return out;
  };

  const openEditor = (initial: string) => {
    setDraft(initial);
    setShowEditor(true);
  };

  // какой набор сейчас редактируем: lessons | accuracy | cpm | letters
  const [editing, setEditing] = useState<
    "lessons" | "accuracy" | "cpm" | "letters"
  >("lessons");

  const applyDraft = () => {
    if (editing === "letters") {
      const parsed = parseLetters(draft);
      if (parsed.length) setLetters(parsed);
    } else {
      const nums = parseNumbers(draft);
      if (!nums.length) return;
      // добиваем/обрезаем ровно до 7 дней недели
      const week = [...nums, ...Array(7).fill(0)].slice(0, 7);
      if (editing === "lessons") setLessons(week.map(Math.round));
      if (editing === "accuracy") setAccuracy(week);
      if (editing === "cpm") setCpm(week.map(Math.round));
    }
    setShowEditor(false);
  };

  const totalLessons = Math.round(lessons.reduce((a, b) => a + b, 0));
  const avgAccuracy = accuracy.length
    ? accuracy.reduce((a, b) => a + b, 0) / accuracy.length
    : 0;
  const avgCpm = cpm.length
    ? Math.round(cpm.reduce((a, b) => a + b, 0) / cpm.length)
    : 0;

  const letterLabels = letters.map((l) => l.letter);
  const letterValues = letters.map((l) => l.errors);

  return (
    <main>
      <Container>
        <div className="pt-17 pb-30 flex justify-between font-ubuntu-r text-2xl">
          <div className="grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-30 max-w-250 pt-13">
            <div className="text-white flex flex-col items-center gap-10">
              <p>Общие кол-во уроков:{totalLessons}</p>
              <div className="w-115 h-90 bg-white p-2">
                <Graph
                  type="bar"
                  data={lessons}
                  labels={DAYS}
                  yLabel="Задания"
                  xLabel="Дни"
                />
              </div>
              <button
                className="text-sm underline text-gray-2 hover:text-white cursor-pointer"
                onClick={() => {
                  setEditing("lessons");
                  openEditor(lessons.join(" "));
                }}
              >
                Ввести задачи за неделю (Пн..Вс)
              </button>
            </div>
            <div className="text-white flex flex-col items-center gap-10">
              <p>Общ точность:{avgAccuracy.toFixed(1)}</p>
              <div className="w-115 h-90 bg-white p-2">
                <Graph
                  type="line"
                  data={accuracy}
                  labels={DAYS}
                  yLabel="Точность(%)"
                  xLabel="Дни"
                />
              </div>
              <button
                className="text-sm underline text-gray-2 hover:text-white cursor-pointer"
                onClick={() => {
                  setEditing("accuracy");
                  openEditor(accuracy.join(" "));
                }}
              >
                Ввести точность за неделю
              </button>
            </div>
            <div className="text-white flex flex-col items-center gap-10">
              <p>Общий Cpm:{avgCpm}</p>
              <div className="w-115 h-90 bg-white p-2">
                <Graph
                  type="line"
                  data={cpm}
                  labels={DAYS}
                  yLabel="Средний cpm"
                  xLabel="Дни"
                />
              </div>
              <button
                className="text-sm underline text-gray-2 hover:text-white cursor-pointer"
                onClick={() => {
                  setEditing("cpm");
                  openEditor(cpm.join(" "));
                }}
              >
                Ввести Cpm за неделю
              </button>
            </div>
            <div className="text-white flex flex-col items-center gap-10">
              <p>Ошибки в буквах</p>
              <div className="w-115 h-90 bg-white p-2">
                <Graph
                  type="bar"
                  data={letterValues}
                  labels={letterLabels}
                  yLabel="ошибок в буквах"
                  xLabel="letter"
                />
              </div>
              <button
                className="text-sm underline text-gray-2 hover:text-white cursor-pointer"
                onClick={() => {
                  setEditing("letters");
                  openEditor(
                    letters.map((l) => `${l.letter} ${l.errors}`).join("\n"),
                  );
                }}
              >
                Ввести ошибки по буквам
              </button>
            </div>
          </div>
          <div className="text-white">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setLang("ru")}
                className={`w-25 py-1 text-center cursor-pointer ${lang === "ru" ? "text-black bg-gray-main" : ""}`}
              >
                Ru
              </button>
              <span> / </span>
              <button
                onClick={() => setLang("en")}
                className={`w-15 py-1 text-center cursor-pointer ${lang === "en" ? "text-black bg-gray-main" : ""}`}
              >
                En
              </button>
            </div>
            <p className="mt-22 mb-15">Общие время на сайте:256</p>
          </div>
        </div>

        {/* Модалка ввода данных */}
        {showEditor && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-[#1c1e24] border border-gray-2 rounded-xl p-6 w-[520px] max-w-[90vw]">
              <h3 className="text-white text-xl mb-2 font-ubuntu-b">
                {editing === "lessons" && "Задачи за неделю (Пн..Вс)"}
                {editing === "accuracy" && "Точность за неделю (Пн..Вс)"}
                {editing === "cpm" && "Cpm за неделю (Пн..Вс)"}
                {editing === "letters" && "Ошибки по буквам"}
              </h3>
              <p className="text-gray-2 text-sm mb-3">
                {editing === "letters"
                  ? 'Каждая буква с новой строки: "А 39" или "А-39". График и список справа пересчитаются буквально по этим числам.'
                  : "7 чисел через пробел — по дням Пн..Вс. График перерисуется буквально по ним."}
              </p>
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                rows={editing === "letters" ? 10 : 3}
                className="w-full rounded-lg p-3 text-black bg-white text-base outline-none"
                placeholder={
                  editing === "letters"
                    ? "А 39\nЁ 25\nВ 24"
                    : "108 109 102 87 120 121 108"
                }
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  className="px-4 py-2 rounded-lg bg-gray-main text-black cursor-pointer"
                  onClick={() => setShowEditor(false)}
                >
                  Отмена
                </button>
                <button
                  className="px-4 py-2 rounded-lg bg-deep-blue text-white cursor-pointer"
                  onClick={applyDraft}
                >
                  Поставить на график
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
};

export default StatisticsPage;
