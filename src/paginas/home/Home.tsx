import React from 'react';
import './Home.css';

function Home(){
    return(
        <>
            <h1 className="titulo">Home</h1>
            <div className='container'>
            <img src='home.png' alt='Imagem Tela Inicial' className='img' />
            </div>
        </>
    );
}

export default Home;