import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/login';

import './App.css';


function App() {
  return (
    <Router> {/* Biblioteca que permite especificar rotas (url) para que um componente especifico seja mostrado nela */}
    <Navbar />
     <div style={{minHeight: '100vh'}}>
     <Routes>
      <Route path='/' element={ <Login /> } /> {/* especificação da rota que aparecerá o componente "Home" ex: localhost:3000/ */}
      <Route path='/home' element={<Home />}/>
      </Routes>
      </div> 

    <Footer />
    </Router>
  
  );
 }


export default App;

