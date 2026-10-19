import React from "react";
import Container from "../components/Container";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-main">
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <h5 className="text-xl">Название сайта </h5>
            {/* <img src="" alt="" /> */}
            <div className="size-16 bg-red-500 rounded-2xl"></div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xl">Навигация</span>
            <Link to="/">Главная</Link>
            <Link to="/training">Тренажёр</Link>
            <Link to="/rating">Рейтинг</Link>
            <Link to="/statistics">Статистика</Link>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xl">Наши соцсети</span>
            <Link to="/">Github</Link>
            <Link to="/training">VK</Link>
            <Link to="/rating">Telegram</Link>
            <Link to="/statistics">MAX</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
