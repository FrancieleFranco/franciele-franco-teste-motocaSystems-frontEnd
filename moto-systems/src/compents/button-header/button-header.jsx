import React from 'react';
import "./button-header.css";

const ButtonHeader = ({ text }) => {
  return (
      <button className='bnt-header'
            /*style={stylebutton}*/
          /*  onClick={onClick}*/
          >
            {text}
      </button>
  );
};

export default ButtonHeader;
