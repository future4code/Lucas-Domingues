import React from 'react';
import './App.css';
import{ CardGrande} from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import  { CardPequeno } from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <><div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          nome="lucas "
          descricao="Oi, sou lucas aluno na labenu , antes eu era inimigo do git mas agora somos melhores amigos , mas nos ignora o tal do javascript." />
        <div />
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais" />
      </div>
      <div className='EmailEendereco'>
          <CardPequeno 
            nome="lucas de souza domingues"
            email="exempla@gamail.com"
       />
          


          
        </div>

    </div><div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Renner prevenção cybersecurit"
          descricao="Formando desenvolvedores para o mercado de trabalho!" />
     

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos." />
      </div><div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook" />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter" />
      </div></>
      
  );
}

export default App;
