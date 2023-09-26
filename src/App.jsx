import Motivation from './components/Motivation'
import './styles.css'

function App() {
  
  return (
    <>
      <div className='body-element'>

        <div className='center-card'>
            Relax! Css is easy
        </div>

        <div className='motivations-container'>
            <Motivation message={'You can do it!'}/>
            <Motivation message={'You will grow.'}/>
            <Motivation message={'You are special.'}/>
        </div>

      </div>

    </>
  )
}

export default App
