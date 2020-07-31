import React from 'react';
import BannerMain from '../BannerMain';
import Carousel from '../Carousel';
import dadosIniciais from '../../data/dados_iniciais.json'

const Dashboard = () => {


    return (
        <>
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
        </>
    );
}

export default Dashboard;


