import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import AcercaDe from './componentes/AcercaDe';

const App = () => {
  return (
    // BrowserRouter debe encerrar la aplicacion
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main>
          {/* En 'Inicio' solamente va a cargar si tenemos la ruta exacta */}
          <Route path="/" exact={true} component={Inicio} />
          <Route path="/blog" component={Blog} />
          <Route path="/acerca-de" component={AcercaDe} />
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
}

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(129,129,129,0.1);
`

export default App;