import React from "react";
import "./table.css";
import { Link } from "react-router-dom";
import Header from "../../compents/header/header";
import ButtonHeader from "../../compents/button-header/button-header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

const Table = () => {
  return (
    <div className="container-table">
    <div className="header-table"> 
  <Header textHeader="Tabela de Motos" />
  <div className="bnt-table"> 
      <input
        type="text"
        placeholder="Buscar por código, nome e cor."
        className="input-field"
      />
       <ButtonHeader text=" + NOVO REGISTRO"/>
   
  </div>
 


  <div class="car-item">
    <h2 className="code-h2">Honda Pop 110i</h2>
    <ul>
        <li>Modelo: Honda Pop 110i</li>
        <li>Valor: R$ 15.000,00</li>
        <li>Cor: Preto</li>
    </ul>
    <div class="icons-data">
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faEye} />
    </div>
</div>

</div>
</div>


      


 








  
   
  );
};

export default Table;
