import React from 'react'
import "./Filtro.css";

class Filtro extends React.Component {
    
        render() {
            return(

                    <div className="container-filtro">
                            <h2>Filtros:</h2>
                            <div className="container-inputs">
                                <label for="valorMin">Valor Mínimo:</label>
                                <input type="number" min="0" name="valorMin"></input>
                            </div>
                            
                            <div className="container-inputs">
                                <label for="valorMax">Valor Máximo:</label>
                                <input type="number" min="0" name="valorMax"></input>
                            </div>
                            
                            <div className="container-inputs">
                                <label>Buscar Produto</label>
                                <input type="text" name="busca" value=""></input>
                            </div>
                    </div>
        )
    };
}
export default Filtro;
