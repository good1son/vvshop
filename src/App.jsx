import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import CardDetail from './pages/CardDetail/CardDetail';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/catalog'
          element={<Catalog />}
        />
        <Route
          path='/catalog/:id'
          element={<CardDetail />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
