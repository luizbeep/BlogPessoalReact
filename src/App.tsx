import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import Home from './paginas/home/Home';
import Login from './paginas/login/login';

import './App.css';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatema/ListaTema';


function App() {
  return (
    <Router> {/* Biblioteca que permite especificar rotas (url) para que um componente especifico seja mostrado nela */}
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/posts" element={<ListaPostagem />} />


        </Routes>
      </div>

      <Footer />
    </Router>

  );
}


export default App;

