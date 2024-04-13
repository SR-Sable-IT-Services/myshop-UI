import logo from './logo.svg';
import './App.css';
import './Header.js';
import Header from './Header.js';
import Registration from './Registration.js';
import LoginSignup from './LogIn.js';//
import bootstrap from './bootstrap.css';
import Products from './Products';
// import Product from './Product';
// import Home  from './Home.js';
//import Navbar from './components/navbar/navbar.jsx';
//import Home from "./components/pages/Home";


function App() {
  return (
    <div className="App">
      <Header/>
      <Products />
      
      <table>
     <h1 className='text-center'>Welcome to myShop</h1>
     </table>
    </div>
  );
}


export default App;