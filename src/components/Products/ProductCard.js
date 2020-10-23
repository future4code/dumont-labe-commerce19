import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div `
    border: 1px solid black;
`;

export class ProductCard extends React.Component {
    render() {
        return(
            <CardContainer>
                ProductCard
                <img src="https://www.flaticon.com/br/icone-gratis/foguete_1815970"  />
            </CardContainer>
        )
    }
}