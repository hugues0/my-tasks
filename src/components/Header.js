import propTypes from 'prop-types'
import React from 'react'
import Button from './Button'


const Header = (props) => {
    const onClick = () => {
        console.log("clicked")
    }
    return (
      <header className="header">
        <h1>{props.title}</h1>
        <Button text="Add" color="green" onClick={onClick}/>
        
      </header>
    );
}

Header.defaultProps = {
    title: "Task tracker"
}

Header.propTypes = {
    title: propTypes.string.isRequired
}

export default Header
