import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {
  return (
    <div>
      <ItemListContainer/>
      <ItemDetailContainer/>
      </div>
  )
}

export default App;
