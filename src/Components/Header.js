import PropTypes from 'prop-types'
import Button  from "./Button";
import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAddClick, changeName }) => {

    const location = useLocation();
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={changeName ? 'red':'Green'} 
            text={changeName ? 'Close':'Add task'} 
            onClick ={onAddClick}/>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes ={
    title: PropTypes.string.isRequired
}

export default Header
