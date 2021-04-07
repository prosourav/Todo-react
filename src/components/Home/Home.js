import React, { useState } from 'react';
import Item from '../Item/Item';
import './Home.css'
const Home = () => {
const [todo, setTodo] = useState([]);
const [text, setText] = useState('');
// const [edit, setEdit] = useState(false);

const handleChange = (event) =>{
    const text = event.target.value;
    setText(text);
}

const handleClick=(event)=>{
    const newTodo = [...todo,text]
    setTodo(newTodo);
    setText('');
}
const handleEdit = (props) =>{
    // console.log(props);
    setText(props);
    
}


    return (
        <div className='mydiv'>
            <input type="text" value={text} name='newtodo' onChange={handleChange}/>
            <button onClick={handleClick}>Submit</button>
        {
            todo.map((data,index) =>  <Item data={data} id={index} key={index} handleEdit={handleEdit} > </Item>)
            // todo.map(data=> <Item data={data} id={data.index} handleEdit={handleEdit}></Item>)
        }
        </div>
    );
};

export default Home;
