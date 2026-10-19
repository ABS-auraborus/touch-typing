import {Link} from "react-router-dom";

const SelectionLine = () => {
  return (
    <div className="max-w-290 w-full mx-auto flex justify-between bg-deep-blue rounded-xl py-5 px-5 font-ubuntu-r text-xl">
      <div className="flex gap-3 text-white">
        <Link to="" className="py-1 px-2">
          RU/EN
        </Link>
        <Link to="" className="py-1 px-2 bg-black rounded-lg">
          Слова
        </Link>
        <Link to="" className="py-1 px-2 bg-pink-accent rounded-lg">
          Предложения
        </Link>
        <Link to="" className="py-1 px-2 bg-pink-accent rounded-lg">
          Код
        </Link>
        <Link to="" className="py-1 px-2 bg-pink-accent rounded-lg">
          Символы
        </Link>
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
