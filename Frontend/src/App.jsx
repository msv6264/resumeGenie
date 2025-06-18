// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OpnPage from './pages/opnPage';
import LinkedIn from './pages/linkedIn.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opnPage" element={<OpnPage />} />
        <Route path="/linkedIn" element={<LinkedIn />} />
      </Routes>
    </div>
  );
}
export default App;
