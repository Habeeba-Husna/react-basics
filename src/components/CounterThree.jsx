import {useState} from 'react'

function CounterThree(){
    const [age,setAge]=useState(40);

    function increment(){
        setAge(a=>a+1);
    }
    return(
        <>
        <h1>your age:{age}</h1>
        <button onClick={()=>{increment();
        increment();
        increment();
        }}> +3 </button>
        <button onClick={increment}>+1</button>
        </>
    );
}
export default CounterThree