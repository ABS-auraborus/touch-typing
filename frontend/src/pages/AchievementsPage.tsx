import Container from "../components/Container";
import AchievementsList from "../components/AchievementsList";

const AchievementsPage = () => {
  const totalAchievements = 5;
  const completedAchievements = 2;

  return (
    <main>
      <Container>
        <div className="text-white py-15">
          <h2 className="font-jet-r text-center text-4xl mb-5">
            Мои Достижения
          </h2>
          <h2 className="font-jet-r text-center text-2xl">
            Получено: {completedAchievements} из {totalAchievements}
          </h2>
          <AchievementsList />
        </div>
      </Container>
    </main>
  );
};

export default AchievementsPage;
