
import './App.css';
import { useState } from 'react';
const App=()=>{
    let newTime=new Date().toLocaleTimeString();
    const [currentTime,setTime]=useState(newTime)

    const getTime=()=>{
      let time=new Date().toLocaleTimeString();
      setTime(time);
    }
    setInterval(getTime,1)
  return (
    <>
        <h1 className='clock'>{currentTime}</h1>
        {/* <button className='getTime_btn' onClick={getTime}>Get Time</button> */}
    </>
   
  );
}

export default App;
