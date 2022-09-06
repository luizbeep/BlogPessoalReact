import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import Home from './paginas/home/Home';
import Login from './paginas/login/login';

import './App.css';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';


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

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />

        </Routes>
      </div>

      <Footer />
    </Router>

  );
}


export default App;

