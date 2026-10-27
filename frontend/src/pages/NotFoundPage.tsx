import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="pt-40 flex flex-col items-center gap-14">
        <div className="flex items-center gap-1 text-white text-extra-large font-ubuntu-r h-45">
          <span>4</span>
          <span className="flex animate-spin [animation-duration:10s]">
            <img src="/public/img/auraborus.svg" alt="0" />
          </span>
          <span>4</span>
        </div>
        <h2 className="font-ubuntu-b text-5xl text-white">
          Страница не найдена
        </h2>
        <Link
          to="/"
          className="px-8 py-5 bg-white rounded-3xl font-ubuntu-r text-xl"
        >
          Перейти на главную
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
