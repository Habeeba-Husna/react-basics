import { useEffect } from "react";
import { useState } from "react";
function Timer(){
    const [time,setTime]=useState(0)
    useEffect(()=>{
        let interval=setInterval(()=>{
            setTime(a=>a+1)},1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
    // },[isRunning])
    // const stopTimer = () => {
    //     setIsRunning(false); // Stop the timer by setting isRunning to false
    // };
    return(
        <div>
            Timer:{time} seconds
            {/* <button onClick={stopTimer}>Stop Timer</button> */}
        </div>
    )
}
export default Timer;
