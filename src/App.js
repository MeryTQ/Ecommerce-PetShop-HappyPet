import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/CartContext/CartContext';
import Footer from './components/Footer/Footer';
import CarouselFade from './components/Carousel/CarouselFade';


const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <CarouselFade/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
