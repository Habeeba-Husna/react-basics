import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);

    function handleClick(){
        setCount(count+1)
    }
    return(
       <button className="abc" onClick={handleClick}>clickme {count}</button>
    );

}
export default Counter;