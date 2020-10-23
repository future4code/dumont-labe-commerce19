import React from 'react';
import styled from 'styled-components';

const FiltersContainer = styled.div `
    border: 1px solid black;
    padding: 8px 0px;
`;

const InputContainer = styled.label`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    margin-bottom: 8px;
`;

export class Filters extends React.Component {
    
    render() {
        return(
            <FiltersContainer>
                <h3>Filters</h3>
                <div>
                    <InputContainer>
                        Valor mínimo:
                        <input type="number"></input>
                    </InputContainer>
                    <InputContainer>
                        Valor maximo:
                        <input type="number"></input>
                    </InputContainer>
                    <InputContainer>
                        Buscar por nome:
                        <input type="text"></input>
                    </InputContainer>
                </div>
            </FiltersContainer>
        );
    }
}