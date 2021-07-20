import React from 'react'
import propTypes from 'prop-types'


const Button = ({color,text,onClick}) => {
    
    return (
      <div>
        <button onClick={onClick} className="btn" style={{ backgroundColor: color }}>
          {text}
        </button>
      </div>
    );
}

Button.propTypes = {
    text: propTypes.string,
    color:propTypes.string,
    onclick:propTypes.func,

}

export default Button
