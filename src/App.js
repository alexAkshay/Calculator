import { useState } from 'react';
import './App.css';

function App() {
  const [one, setone] = useState()
  const [two, settwo] = useState()
  const [res, setRes] = useState()
  const [def, setdef] = useState(true)
  
  const number1 = (event) =>{
    setdef(false)
    setone(event.target.value)
  }
  const number2 = (event) =>{
    setdef(false)
    settwo(event.target.value)
  }

  const sum = () =>{
    if(one !== '' && two !== ''){
      setRes(parseInt(one) + parseInt(two))
    }else{
      setRes(false)
      setone('')
      settwo('')
      setdef(true)
    }
  }

  const substract = () =>{
    if(one !== '' && two !== ''){
        setRes(one-two) 
    }else{
      setRes(false)
      setone('')
      settwo('')
      setdef(true)
    } 
  }

  const mutiply = () =>{
    if(one !== '' && two !== ''){
        setRes(one*two)
    }else{
      setRes(false)
      setone('')
      settwo('')
      setdef(true)
    }
  }

  const divide= () =>{
    if(one !== '' && two !== ''){
        setRes(one/two)
    }else{
      setRes(false)
      setone('')
      settwo('')
      setdef(true)
    }
  }
  

  return (

    <div className="App">
     {   def?
         <div className='heading'> Please Enter The Numbers Below</div>
         :null
     }
      <div className='input'>
        <label>Number 1: </label>
        <input type='number' onChange={number1} value={one} />
        <br/>
        <label>Number 2: </label>
        <input type='number' onChange={number2} value={two} />
      </div>
      
      <div className='buttons'>
        <button onClick={sum}>ADD</button>
        <button onClick={substract}>SUBSTRACT</button>
        <button onClick={mutiply}>MULTIPLY</button>
        <button onClick={divide}>DIVIDE</button>
      </div>
      
      <div s>
        { res? <div className='res'>
          Result is {res}
          </div> : null
        }
      </div>
    
    </div>
  );
}

export default App;
