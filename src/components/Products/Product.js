import React from 'react';
import { ProductCard} from './ProductCard';
import styled from 'styled-components';

const ProductsContainer = styled.div `
    border: 1px solid black;
`;

const ProductHeader = styled.header `
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 16px;
`;

const ProductsGrid = styled.div `
    display:grid;
    grid-template-columns: repeat (3, 1fr);
`;

export class Products extends React.Component {
    render() {
        return(
            <ProductsContainer>
                <ProductHeader>
                    <p>Quantidade de produtos: 4</p>
                    <label>
                        Ordenação:
                        <select>
                            <option>Nenhum</option>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </label>
                </ProductHeader>
                <ProductsGrid>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </ProductsGrid>
            </ProductsContainer>
        )
    }
}