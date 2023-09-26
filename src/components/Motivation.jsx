import React ,{useState} from 'react'
import '../styles.css'

const Motivation = (props) =>{
    const [clicked, setClicked] = useState(false)

    const handleClick = ()=>{
        if(!clicked){
            setClicked(true)
        }else{
            setClicked(false)
        }
    }

    return(
        <>
            {!clicked ? (

                <div onClick={handleClick} className='message-container-purple'>
                    {props.message}
                </div>
                ):(
                <div onClick={handleClick} className='message-container-green'>
                    {props.message}
                </div>    
                )
            }
        </>
    )
}

export default Motivation