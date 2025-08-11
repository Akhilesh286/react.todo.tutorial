import { useState } from 'react';
import './App.css';
import plus_icon from './images/plus_icon.svg'
import delete_icon from './images/delete_icon.svg'
import edit_icon from './images/edit_icon.svg'
import mark_icon from './images/mark_icon.svg'
import cancel_icon from './images/cancel_icon.svg'
// import delete_icon from './images/delete_icon.svg'

function App() {
  const [todo, setTodo] = useState('')
  const [toDos, setToDos] = useState([])
  return (
    <div className="App">
      <div className="container">
        <div className="todo-add">
          <input onChange={(e)=>{setTodo(e.target.value)}} value={todo} type="text" name="" id="" />
          <button onClick={()=>{
            setToDos([...toDos,{id:Date.now(),value:todo,status:false}])
            setTodo('')
          }}><img src={plus_icon} alt="" /></button>
        </div>
        <div className="dis-tools">
          <h1>ToDo Tasks</h1>
          <button onClick={()=>{
            setToDos(toDos.filter((val)=>!val.status))
          }}><img src={delete_icon} alt="" /></button>
        </div>
      <div className="todo-dis">
        {
          toDos.map((val,idx)=>{
            return (
              <div className="dis-crd">
                <input style={val.status ? {textDecoration:'line-through'} : {}} value={val.value} type="text" disabled/>
                <button onClick={()=> {
                  setToDos(toDos.filter((val2,idx)=>{
                    if (val2.id==val.id){
                      val2.status=!val.status
                    }
                    return val2
                  }))
                }}><img src={val.status ?cancel_icon:mark_icon} alt="" /></button>
              </div>        
          )
          })
        }
      </div>
      </div>
    </div>
  );
}

export default App;
