import React from 'react';
import './edit.css';
import { Link } from 'react-router-dom';
import ButtonPages from '../../compents/button-pages/button';
import Header from '../../compents/header/header';

const Edition
 = () => {
  return (
    <div className='container'>
    <Header textHeader="Editar" />
    <h1 className='edit-h1'>Edite as informações que preferir! 📝</h1>
    <form action="/enviar" method="post">
      <label htmlFor="code">Código</label>
      <input type="text" id="code" name="code" required />

      <label htmlFor="model" className='model'>Modelo da Moto</label>
      <input type="text" id="model" name="model" required />

      <label htmlFor="color">Cor</label>
      <input type="text" id="color" name="color" required />

      <label htmlFor="value">Valor</label>
      <input  type="text" id="value" name="value"  required/>

      <label htmlFor="status">Staus</label>
      <select type="text" id="status" name="status" >
        <option value="option1">Em estoque</option>
        <option value="option2">Sem estoque</option>
      </select>
      <div>
      <ButtonPages  text="   ATUALIZAR" />
      </div>
    </form>
    <Link to=""></Link>
  </div>   
  );
};

export default Edition;