import React, { useEffect, useState } from 'react'

const Timer = ({value}) => {
const [count, setCount]=useState(value.start)
const [timerId, setTimerId]= useState()

// value.end--prop at which stopwatch should clear Interval and reset;

     const handleCount = ()=> {
      
             if(!timerId){
                var  id=  setInterval(() => {
                    setCount((count)=> {
                      if(count>=value.end)
                      {
                        clearInterval(timerId);
                        setCount(value.start);
                      }
                      
                      return (count+1)});
                    setTimerId(id);
                   
                },1000)
         } 
       }
                    
    
  return (
    <div>
       
    <h1>Increment timer: {count}</h1>
    <button onClick={handleCount} >Start Timer</button>
    </div>
  )
}

export default Timer;