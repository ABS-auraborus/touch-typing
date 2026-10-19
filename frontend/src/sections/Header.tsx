import {Link} from "react-router-dom";
import Container from "../components/Container";

const Header = () => {
  return (
    <header className="bg-gray-main">
      <Container>
        <nav className="flex gap-4 py-6 justify-between">
          <Link to="/">Главная</Link>
          <Link to="/training">Тренажёр</Link>
          <Link to="/rating">Рейтинг</Link>
          <Link to="/statistics">Статистика</Link>
          <Link to="/auth">Войти / Создать аккаунт</Link>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
