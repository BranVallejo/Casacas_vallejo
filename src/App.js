import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from './components/Cart/Cart';
import {CartContextProvider} from './context/CartContext'
import { NotificationServicesProvider } from './services/notification/NotificationServices';

function App() {
  return (
    <div className="App">
      <NotificationServicesProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="🔥¡Bienvenidos a Casacas!⚽" />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Vestila con orgullo😎" />} />
              <Route path='/detail/:productId'  element={<ItemDetailContainer />} />
              <Route path='cart'  element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationServicesProvider>
    </div>
  );
}

export default App;
