import {useState} from  'react';

function Type(){
    const [text,setText]=useState('hello');
    // const [text,setText]=useState('');

    function handleChange(e){
        setText(e.target.value)
    }
    return(
        <>
        <input value={text} onChange={handleChange}/>
        {/* <input onChange={handleChange}/> */}
        <p>you typed:{text}</p>
        <button onClick={()=>setText('hello')}>Reset</button>
        </>
    );
}
export default Type;