import {Link} from "react-router-dom";
import Container from "../components/Container";
import UserIcon from "../components/UserIcon";

const Header = () => {
  const isLoggedIn = false;
  return (
    <header className="bg-blue-accent text-white">
      <Container>
        <nav className="flex gap-4 py-6 justify-between items-center font-jet-r">
          <Link to="/">Главная</Link>
          <Link to="/training">Тренажёр</Link>
          <Link to="/rating">Рейтинг</Link>
          <Link to="/statistics">Статистика</Link>
          <Link to="/achievements">Достижения</Link>
          {!isLoggedIn && (
            <Link to="/login">
              <UserIcon avatarUrl="/public/icons/user-unlogged-img.svg" />
            </Link>
          )}
          {isLoggedIn && (
            <UserIcon avatarUrl="/public/icons/user-logged-img.svg" />
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
