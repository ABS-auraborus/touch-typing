import {Link} from "react-router-dom";
import Container from "../components/Container";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <header className="bg-header-footer text-white">
      <Logo className="absolute top-0 left-0" />
      <Container>
        <nav className="flex gap-4 py-6 justify-between font-jet-r">
          <Link to="/">Главная</Link>
          <Link to="/training">Тренажёр</Link>
          <Link to="/rating">Рейтинг</Link>
          <Link to="/statistics">Статистика</Link>
          <Link to="/statistics">Достижения</Link>
          <Link to="/auth">Войти/Создать аккаунт</Link>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
