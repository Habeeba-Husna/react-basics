import {useState} from 'react';
function Checkbox(){
    const [liked,setLiked]=useState(true);

    function handleChange(e){
        setLiked(e.target.checked);
    }
    return(
        <>
        <label>
            <input type="checkbox" checked={liked} onChange={handleChange}/>I Liked this</label>
            <p>you {liked ?'liked' :'not like'}</p>
        </>
    )
}
export default Checkbox;