import Button from "../../components/Button";

const AppPurpose = () => {
  return (
    <section className="flex justify-between">
      <div>
        <h1 className="w-127 text-4xl mb-8 font-ubuntu-r">
          Этот сайт предназначен для практики слепой печати. Зарегестрируйся
          прямо сейчас и начни первые шаги в слепой печати
        </h1>
        <Button to="/training">Начать задание</Button>
      </div>
      <div>
        <div className="w-142 h-90 bg-black-main"></div>
        {/* <img src="" alt="" /> */}
      </div>
    </section>
  );
};

export default AppPurpose;
