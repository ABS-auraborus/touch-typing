import React from "react";
import Container from "../components/Container";

const RegistrationPage = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col items-center text-white text-xl font-ubuntu-r max-w-125 w-full px-15 py-10 bg-dark-blue-2 rounded-3xl">
        <h4 className="text-4xl mb-11">Регистрация</h4>
        <form
          className="w-full flex flex-col items-center gap-8 bg-dark-blue-2 [&_input]:bg-black-secondary [&>input]:p-3 [&>input]:rounded-2xl [&>input]:w-full"
          action="#"
        >
          <input placeholder="Имя / Username" type="text" name="name" />
          <input placeholder="Почта / Email" type="email" name="email" />
          <input
            placeholder="Пароль / Password"
            type="password"
            name="password"
          />
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
          <button className="bg-black-secondary w-62.5 py-3 rounded-3xl mt-10">
            Продолжить / Next
          </button>
        </form>
      </div>
    </main>
  );
};

export default RegistrationPage;
