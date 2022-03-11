/*import logo from './logo.svg';*/
import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';

function App() {
  return (
    <body>
      <Navbar/>
      <ItemListContainer saludar ={ "BIENVENIDOS A NUESTRO PETSHOP"}/>
      <ItemCount />
      </body>  
  );
}

export default App;
