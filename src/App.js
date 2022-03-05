/*import logo from './logo.svg';*/
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';

function App() {
  return (
    <body>
      <Navbar/>
      <ItemListContainer saludar ={ "BIENVENIDOS A NUESTRO PETSHOP"}/>
      </body>  
  );
}

export default App;
