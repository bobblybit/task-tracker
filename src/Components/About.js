import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div className='task'>
           <div >This is simple application that helps one keeps track of his/her task</div> <br/>
           <p>developed by <a href="http://www.google.com">solomon young</a> </p> <br/>
           <Link to="/">Go Back</Link>
        </div>
    )
}

export default About
