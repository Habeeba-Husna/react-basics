import{useState} from 'react'

function Form(){
    const [name,setName]=useState('habeeba');
    const [age,setAge]=useState(20);

  return(
    <>
      <input value={name} onChange={e=>setName(e.target.value)}/>
      <button onClick={()=>setAge(age+1)}>Increment Age</button>
      <p>hi, {name} , you are {age} years old</p>
    </>
  );  
}
export default Form;