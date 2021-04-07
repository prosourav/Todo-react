import React, { useState } from 'react';
import Home from '../Home/Home';

const Item = (props) => {
    // console.log("props value: ",props.handleEdit);
    const {id, data} = props;
    const [del, setdel] = useState(false);
    
    const deleteIt = (id) =>{
        setdel(true);
     }

    return (
        <div>
             <li style={{display: del && 'none' }}>{data}
            <button onClick={()=>deleteIt(id)}>delete</button> 
            <button onClick={()=>props.handleEdit(data,deleteIt(id))}>Edit</button></li>
        </div>
    );
};

export default Item;