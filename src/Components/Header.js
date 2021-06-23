import PropTypes from 'prop-types'
import Button  from "./Button";


const Header = ({ title, onAddClick, changeName }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={changeName ? 'red':'Green'} 
            text={changeName ? 'Close':'Add task'} 
            onClick ={onAddClick}/>
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
