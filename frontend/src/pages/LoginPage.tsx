import {Link} from "react-router-dom";

const LoginPage = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col items-center text-white text-xl font-ubuntu-r max-w-125 w-full h-150 px-15 py-10 bg-blue-accent rounded-3xl">
        <h4 className="text-4xl mb-11">Войти</h4>
        <form
          className="w-full h-full flex flex-col items-center gap-6 bg-dark-blue-2 [&_input]:bg-dark-blue-main [&>input]:py-3 [&>input]:px-4 [&>input]:rounded-3xl [&>input]:w-full"
          action="#"
        >
          <input placeholder="Почта / Email" type="email" name="email" />
          <input
            placeholder="Пароль / Password"
            type="password"
            name="password"
          />
          <div className="flex justify-between w-full -mt-3 text-lg select-none">
            <button className="cursor-pointer">Забыли пароль?</button>
            <Link to="/registration" className="cursor-pointer">
              Еще нет аккаунта?
            </Link>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <label className="cursor-pointer select-none" htmlFor="remember-me">
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

export default LoginPage;
