const UsefulTo = () => {
  return (
    <section className="pt-20 pb-27 font-ubuntu-b">
      <h3 className="text-xl mb-8">Кому это подходит?</h3>
      <ul className="flex justify-between gap-8">
        <li>
          <h5 className="text-xl mb-3">Программистам и разработчикам</h5>
          <p className="text-sm font-ubuntu-r">
            Быстрый набор кода без отвлечения на клавиатуру экономит часы работы
            и позволяет не терять мысль во время сложной логики.
          </p>
        </li>
        <li>
          <h5 className="text-xl mb-3">Копирайтерам и журналистам</h5>
          <p className="text-sm font-ubuntu-r">
            Помогает переносить мысли на экран со скоростью разговорной речи.
            Больше текстов — выше заработок.
          </p>
        </li>
        <li>
          <h5 className="text-xl mb-3">Студентам и школьникам</h5>
          <p className="text-sm font-ubuntu-r">
            Для быстрого написания рефератов, курсовых, дипломов и конспектов
            лекций прямо во время занятий.
          </p>
        </li>
        <li>
          <h5 className="text-xl mb-3">Геймерам и киберспортсменам</h5>
          <p className="text-sm font-ubuntu-r">
            Секундная задержка при поиске нужной клавиши в чате или макросе
            может стоить победы в катке.
          </p>
        </li>
        <li>
          <h5 className="text-xl mb-3">Офисным сотрудникам и менеджерам</h5>
          <p className="text-sm font-ubuntu-r">
            Отвечайте на рабочие письма, заполняйте отчеты и общайтесь в чатах в
            3 раза быстрее коллег.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default UsefulTo;
