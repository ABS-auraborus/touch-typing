import {Link} from "react-router-dom";

const SelectionLine = () => {
  return (
    <div className="flex justify-between bg-blue-800 rounded-xl py-5 px-5">
      <div className="flex gap-3">
        <Link to="" className="py-1 px-2 bg-cyan-400 rounded-lg">
          RU/EN
        </Link>
        <Link to="" className="py-1 px-2 bg-gray-400 rounded-lg">
          Слова
        </Link>
        <Link to="" className="py-1 px-2 bg-gray-400 rounded-lg">
          Предложения
        </Link>
        <Link to="" className="py-1 px-2 bg-gray-400 rounded-lg">
          Код
        </Link>
        <Link to="" className="py-1 px-2 bg-gray-400 rounded-lg">
          Символы
        </Link>
      </div>
      <div className="flex items-center gap-16 pr-22">
        <span>Комбо: </span>
        <span>Ошибки: </span>
      </div>
    </div>
  );
};

export default SelectionLine;
