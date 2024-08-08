
import { useState } from 'react';
import './App.css';

function App() {
  const [inputval,setInputVal]=useState(0)
  const generateArray=(inputval)=>{
    const num=Number(inputval)
    if(isNaN(num) || num<=0){
      return [];
    }
    return [num,num+2,num+4]
  }
  return (
    <div className="App">
      <input type="number" onChange={(e)=>setInputVal(e.target.value)} value={inputval}/>
      <p style={{display:Number(inputval)<0?"block":"none"}}>Enter a positive value</p>
     <div style={{display:inputval===0 || inputval<0|| inputval===''?"none":"block"}}>{JSON.stringify(generateArray(inputval))}</div>
   </div>
  );
}

export default App;
