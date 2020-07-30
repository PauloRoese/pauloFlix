import React from 'react';
import Menu from './Components/Menu/Menu';
import BannerMain from './Components/BannerMain';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import dadosIniciais from './data/dados_iniciais.json'
import './index.css'

function App() {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[1].videos[3].titulo}
        url={dadosIniciais.categorias[1].videos[3].url}
        videoDescription={'Back To Back-end'}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      />
      <Footer />
    </div>
  );
}

export default App;
