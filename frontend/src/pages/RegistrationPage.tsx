import React from "react";
import Container from "../components/Container";
import {Link} from "react-router-dom";

const RegistrationPage = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col items-center text-white text-xl font-ubuntu-r max-w-125 w-full h-150 px-15 py-10 bg-blue-accent rounded-3xl">
        <h4 className="text-4xl mb-11">Регистрация</h4>
        <form
          className="w-full h-full flex flex-col items-center gap-6 bg-dark-blue-2 [&_input]:bg-dark-blue-main [&>input]:py-3 [&>input]:px-4 [&>input]:rounded-3xl [&>input]:w-full"
          action="#"
        >
          <input placeholder="Имя / Username" type="text" name="name" />
          <input placeholder="Почта / Email" type="email" name="email" />
          <input
            placeholder="Пароль / Password"
            type="password"
            name="password"
          />
          <div className="flex justify-end w-full -mt-3 text-lg select-none">
            <Link to="/login" className="cursor-pointer">
              Уже есть аккаунт?
            </Link>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <label className="cursor-pointer" htmlFor="remember-me">
              Запомнить меня
            </label>
            <input
              className="cursor-pointer appearance-none size-7 rounded-full bg-no-repeat bg-center checked:bg-[url(/public/icons/star.svg)]"
              type="checkbox"
              id="remember-me"
            />
          </div>
          <button className="bg-dark-blue-main w-62.5 h-13 rounded-3xl mt-auto">
            Продолжить / Next
          </button>
        </form>
      </div>
    </main>
  );
};

export default RegistrationPage;
