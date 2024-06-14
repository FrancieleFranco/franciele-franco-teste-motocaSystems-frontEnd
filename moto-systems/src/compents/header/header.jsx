import React from 'react';
import img1 from '../../assets/images/Group 111.png'
import vector from '../../assets/images/Vector.png'
import './header.css';

const Header = ({ textHeader }) => {
  return (
    <div className="header">
      <div className="text">
        {textHeader }
      </div>
      <div className="images-header">
        <img src={vector} alt="Imagem 2" className="img-vetor" />
        <img src={img1} alt="Imagem 1" className="img1-group" />
      </div>
    </div>
  );
};

export default Header;

