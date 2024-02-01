import { useState } from 'react'
import './App.css';

const operators = ['/','*','-','+']

const buttons = [
  '7',
  '8',
  '9',
  '/',
  '4',
  '5',
  '6',
  '*',
  '1',
  '2',
  '3',
  '-',
  '.',
  '0',
  '=',
  '+'
]

function App() {

  const [input,setInput] = useState('');
  const [output,setOutput] = useState('');

  const onInput = (num:string)=>{
    if(num === '='){
      if(operators.includes(input[input.length - 1])){
        return
      }
      setOutput(eval(input));
      return;
    }
    if(
      operators.includes(num) &&
      operators.includes(input[input.length - 1])
    ){
      setInput(input.substring(0,input.length - 1) + num);
      return
    }
    setInput(input + num);
  }

  return (
    <div className='main-container'>
     <div className='calculator'>
      <div className='monitor'>
        <div className="input">
          {input || 0}
        </div>
        <div className="output">
          {output || 0}
        </div>
      </div>
      <div className="button-section">
        {buttons.map((num)=>
          <button
            className={
              num === '='? 'green':
              operators.includes(num)?'red'
              :''
              }
            onClick={()=>onInput(num)}
            key={num}
          >
            {num}
          </button>
        )}
      </div>
     </div>
    </div>
  )
}

export default App
