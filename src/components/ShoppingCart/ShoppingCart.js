import React from 'react';
import {ShoppingCartItem} from './ShoopingCartItem';
import styled from 'styled-components';

const ShoppingCartContainer = styled.div `
    border: 1px solid black;
`;

export class ShoppingCart extends React.Component {
    render() {
        return(
            <ShoppingCartContainer>
                Cart:
                <ShoppingCartItem/>
            </ShoppingCartContainer>
        )
    }
}