import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrainingPage from "./pages/TrainingPage";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import StatisticsPage from "./pages/StatisticsPage";
import AchievementsPage from "./pages/AchievementsPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
