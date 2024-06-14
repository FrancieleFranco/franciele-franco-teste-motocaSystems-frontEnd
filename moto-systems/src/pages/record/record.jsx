import React from 'react';
import './record.css';
import { Link } from 'react-router-dom';
import ButtonPages from '../../compents/button-pages/button';
import Header from '../../compents/header/header';
import  { useState } from 'react';
import { postData } from '../../api';

const Record = () => {
  const [formData, setFormData] = useState({
    codigo: '',
    modelo: '',
    cor: '',
    valor: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postData('produtos', formData);
      console.log('Sucesso prduto registrado:', response);
    } catch (error) {
      console.error('Erro ao registrar produto:', error);
    }
  };
  return (
    <div className='container'>
      <Header textHeader="Registro de Motos" />
      <h1 className='record-h1'>Preencha as informações a baixo para registrar uma Moto 🏍️</h1>
      <form action="/enviar" method="post">
        <label htmlFor="code">Código</label>
        <input type="text" id="code" name="code" required value={formData.codigo}
            onChange={handleChange} />

        <label htmlFor="model" className='model'>Modelo da Moto</label>
        <input type="text" id="model" name="model" required value={formData.modelo}
            onChange={handleChange} />

        <label htmlFor="color">Cor</label>
        <input type="text" id="color" name="color" required value={formData.cor}
            onChange={handleChange} />

        <label htmlFor="value">Valor</label>
        <input  type="text" id="value" name="value"  required  value={formData.valor}
            onChange={handleChange} />

        <label htmlFor="status">Staus</label>
        <select type="text" id="status" name="status" value={formData.status}
            onChange={handleChange} >
          <option value="option1">Em estoque</option>
          <option value="option2">Sem estoque</option>
        </select>
        <div>
        <ButtonPages  text=" +  RESGISTRAR" type="submit" />
        </div>
      </form>
      <Link to=""></Link>
    </div>   
  );
};

export default Record;