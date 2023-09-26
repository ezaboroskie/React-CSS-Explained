import React from 'react'
import '../styles.css'

const Motivation = (props) =>{

    return(
        <>
            <div className='message-container'>
                {props.message}
            </div>
        </>
    )
}

export default Motivation