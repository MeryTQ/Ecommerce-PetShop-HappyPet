import "./css/App.css"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje="Hola soy un ItemListContainer"/>
    </>
  )
}

export default App;