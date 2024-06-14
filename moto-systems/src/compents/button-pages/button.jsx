import React from 'react';
import "./buttonPages.css"

const ButtonPages = ({ text }) => {
  return (
      <button className='bnt'
            /*style={stylebutton}*/
          /*  onClick={onClick}*/
          >
            {text}
      </button>
  );
};

export default ButtonPages;
