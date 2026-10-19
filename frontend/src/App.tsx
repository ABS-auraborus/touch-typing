import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
        <Link to="/">Главная</Link>
        <Link to="/items">Элементы (API)</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemsPage />} />
      </Routes>
    </div>
  );
}

export default App;
