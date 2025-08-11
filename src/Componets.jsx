import './App.css'
import { useState } from 'react'



// const [toDo,addTodo] = useState('')
// const [toDos,addToDOs] = useState([])
// return (
//     <div className="container">
//         <div className="inp-add">
//             <input value={toDo} onChange={
//                 (e) => {
//                     addTodo(e.target.value)
//                 }
//             } type="text" placeholder="Add item"/>
//             <button onClick={
//                 (e) => {
//                     addToDOs([...toDos,{id:Date.now(),value:toDo,status:false}])
//                     addTodo('')
//                 }
//             }>+</button>
//             <div className="dis-del">
//             <button onClick={
//                 () => {
//                     addToDOs(toDos.filter(val => !val.status))
//                 }
//             }>delete</button>
//         </div>
//         <div className="display">
        
//         {
//             toDos.map((val,idx) => {
//                 return (
//                     <div className='dsp-inp'>
//                         <input className='inp-val' type="text" value={val.value} disabled/>
//                         <input className='inp-ck' type="checkbox" value={val.status} name="" id="" onChange={
//                             (e) => {
//                                 addToDOs(toDos.filter((val2) => {
//                                     if (val2.id == val.id)
//                                         val2.status = e.target.checked
//                                     return val2 
//                                 }))  
//                             }
//                         } />
//                     </div>
//                 )
//             })
//         }
//     </div>
//     {console.log("todoos")}
//     {console.log(toDos)}
//             {/* <h1>{toDos}</h1> */}
//         </div>
//     </div>
// )

function InputAdd() {

}

export default InputAdd