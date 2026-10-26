const TextHolder = () => {
  return (
    <div className="flex flex-col justify-between max-w-270 h-90 w-full pl-10 py-4 mx-auto bg-blue-accent my-10 text-white overflow-hidden rounded-2xl">
      <p className="flex flex-col font-ubuntu-r text-center text-base">
        <span>
          Текущая сессия: <br />
          скорость: 180 символов / мин., 200 слов / мин.; точность: 98%;
          количество ошибок: 0
        </span>
      </p>
      <p className="overflow-hidden whitespace-nowrap font-jet-r text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        nobis nihil alias repellendus suscipit, aliquam exercitationem fugit
        laboriosam ad culpa aliquid dicta labore dolorum commodi temporibus eos,
        eaque debitis ut.
      </p>
      <span className="max-w-72.5 w-full mx-auto font-ubuntu-r text-base ">
        Бонус: «+50% к скорости», «удвоение опыта на 10 секунд»
      </span>
    </div>
  );
};

export default TextHolder;
