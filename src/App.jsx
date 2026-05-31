import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Catalog from './components/Catalog/Catalog';
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
