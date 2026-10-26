const SelectionLine = () => {
  return (
    <div className="max-w-290 w-full mx-auto flex justify-between bg-blue-accent rounded-xl py-5 px-5 font-ubuntu-r text-xl">
      <div className="flex gap-3 text-white">
        <button className="cursor-pointer py-1 px-2">RU/EN</button>
        <button className="cursor-pointer py-1 px-2 bg-black rounded-lg">
          Слова
        </button>
        <button className="cursor-pointer py-1 px-2 bg-beige rounded-lg">
          Предложения
        </button>
        <button className="cursor-pointer py-1 px-2 bg-beige rounded-lg">
          Код
        </button>
        <button className="cursor-pointer py-1 px-2 bg-beige rounded-lg">
          Символы
        </button>
      </div>
      <div className="flex items-center gap-16 pr-22 text-white">
        <span>Очки: 999</span>
        <span>Комбо: X1</span>
        <span>Ошибки: 0</span>
      </div>
    </div>
  );
};

export default SelectionLine;
