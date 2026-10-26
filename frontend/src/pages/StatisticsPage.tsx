import Container from "../components/Container";

const StatisticsPage = () => {
  return (
    <main>
      <Container>
        <div className="pt-17 pb-30 flex justify-between font-ubuntu-r text-2xl">
          <div className="grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-30 max-w-250 pt-13">
            <div className="text-white flex flex-col items-center gap-10">
              <p>Общие кол-во уроков:500</p>
              <div className="w-115 h-90 bg-black-main"></div>
            </div>
            <div className="text-white flex flex-col items-center gap-10">
              <p>Общ точность:98</p>
              <div className="w-115 h-90 bg-black-main"></div>
            </div>
            <div className="text-white flex flex-col items-center gap-10">
              <p>Общий Cpm:150</p>
              <div className="w-115 h-90 bg-black-main"></div>
            </div>
            <div className="text-white flex flex-col items-center gap-10">
              <p>Ошибки в буквах</p>
              <div className="w-115 h-90 bg-black-main"></div>
            </div>
          </div>
          <div className="text-white">
            <div className=" flex gap-4">
              <p className="text-black bg-gray-main w-25 py-1 text-center">
                Ru
              </p>
              <span> / </span>
              <p>En</p>
            </div>
            <p className="mt-22 mb-115">Общие время на сайте:256</p>
            <div className="flex flex-col">
              <span>Ошибки: </span>
              <span>А - 39%</span>
              <span>Ё - 25%</span>
              <span>B - 24%</span>
              <span>C - 23%</span>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default StatisticsPage;
