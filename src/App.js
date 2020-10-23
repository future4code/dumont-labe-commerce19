
import React from 'react';
import {Filters} from './components/FIlters/Filters';
import {Products} from "./components/Products/Product";
import {ShoppingCart} from './components/ShoppingCart/ShoppingCart'
import styled from 'styled-components';

  const AppContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr 1fr;
    padding: 16px;
    gap:8;
  `;

 function App() {

  
    return (
      
      <AppContainer>

        <Filters/>
        <Products/>
        <ShoppingCart/>

      </AppContainer>
   
   );
  
}

export default App;