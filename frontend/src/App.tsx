import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrainingPage from "./pages/TrainingPage";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/training" element={<TrainingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
