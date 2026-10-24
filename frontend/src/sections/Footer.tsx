import Container from "../components/Container";
import {Link} from "react-router-dom";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer className="py-6 bg-header-footer text-white">
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <h5 className="text-xl font-jet-m">blindtypeABS</h5>
            <Logo />
          </div>
          <div className="flex flex-col gap-1 font-jet-r text-sm">
            <span className="text-xl font-jet-b">Навигация</span>
            <Link to="/">Главная</Link>
            <Link to="/training">Тренажёр</Link>
            <Link to="/rating">Рейтинг</Link>
            <Link to="/statistics">Статистика</Link>
          </div>
          <div className="flex flex-col gap-1 font-jet-r text-sm">
            <span className="text-xl font-jet-b">Наши соцсети</span>
            <a href="https://github.com/c4inusiii/touch-typing" target="_blank">
              Github
            </a>
            <a href="/" target="_blank">
              VK
            </a>
            <a href="/" target="_blank">
              Telegram
            </a>
            <a href="/" target="_blank">
              MAX
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
