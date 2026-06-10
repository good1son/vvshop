import { Routes, Route } from 'react-router-dom';
import { OrderModalProvider } from './contexts/OrderModalContext';
import useItemsStore from './stores/useItemsStore';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import CatalogPages from './pages/CatalogPages';
import { useEffect } from 'react';
import './App.css';

function App() {
  const getItems = useItemsStore((state) => state.getItems);

  useEffect(() => {
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/catalog/*'
          element={
            <OrderModalProvider>
              <CatalogPages />
            </OrderModalProvider>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
