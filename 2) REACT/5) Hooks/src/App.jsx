import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// HOOKS
// UseState

// function App() {
//     // // for inc and dec
//     const [counter, setCounter] = useState(0)
//     // for TODO

//     return (

//         < div className="AppMain" >
//             <div>
//                 {/* increment & decrement */}
//                 <h1>{counter}</h1>
//                 <button onClick={() =>
//                     setCounter(counter + 1)
//                 }>Increment</button>
//                 <button onClick={() =>
//                     setCounter(counter - 1)
//                 }>Decrement</button>

//                 <br />
//                 <br />
//                 <br />

//             </div >
//         </div >

//     )
// }
/////////////////////////////////////////////////////////////////////////////////////////


// // useState aik hook hai
// jab bhi state update hoti hai tou component dobara render hota hai
// import { useState } from "react"
// function App() {
//     // for TODO
//     const [todos, setTodos] = useState([{ value: "Talha", disabled: true }, { value: "Taha", disabled: true }])
//     const [value, setValue] = useState('')
//     const addTodos = () => {
//         setTodos([...todos, { value, disabled: true }])
//         setValue("")
//     }
//     return (

//         < div className="AppMain" >
//             <div>



//                 {/* Todo */}

//                 <input value={value} type="text" onChange={(e) => {
//                     setValue(e.target.value)
//                 }} />
//                 <button onClick={addTodos}>Add todo</button>
//                 <button onClick={() => {
//                     setTodos([])
//                 }}>Delete All</button>


//                 <ul>
//                     {todos.map((v, i) => <li key={i}>
//                         <input disabled={v.disabled}
//                             defaultValue={v.value}
//                             onChange={(e) => e.target.value}
//                             type="text" />
//                         {v.disabled ?
//                             <button onClick={() => {
//                                 todos.splice(i, 1, { ...v, disabled: false })
//                                 setTodos([...todos])
//                             }}>Edit</button>
//                             :
//                             <button onClick={() => {
//                                 v.disabled = true
//                                 setTodos([...todos])
//                             }}>Update</button>
//                         }
//                         <button onClick={() => {
//                             const oldTodos = [...todos]
//                             oldTodos.splice(i, 1)
//                             setTodos(oldTodos)
//                         }}>Delete</button>
//                     </li>)
//                     }

//                 </ul>
//             </div>
//         </div >
//     )
// }
// export default App
////////////////////////////////////////////////////////////////////
// import { useState } from "react"
// function App() {
//   // //////////////////////////////// REVISION
//   // name variable hai or setname function hai jo value update karta hai
//   //   const [name, setName] = useState("Talha")
//   //   return (
//   //     <div>
//   //       <h1>{name}</h1>
//   //       <button onClick={() => {
//   //         setName("Talha Tahir")
//   //       }}>Update</button>
//   //     </div>
//   //   )
//   // //////////////////////////////////////////////////////////////
//   //  ///////////////////////DATA BINDING

//   // state
//   //  the whole process is called 2 way binding jese ke input se bhi value le
//   //  or state se bhi  value le isse 2 way binding kehte hain
// import { useState } from "react"
// import { Button } from 'react-bootstrap';

// function App() {
//   const [value, setValue] = useState("kjdas")
//   return (
//     <div>
//       {/* value={value} : state is binding with input */}
//       {/* input is binding with state through on change */}
//       <input value={value} type="text" onChange={(e) => {
//         setValue(e.target.value)
//       }} />
//       <h1>{value}</h1>
//       <Button variant="danger" onClick={() => {
//         setValue("")
//       }}>Reset</Button>
//     </div>
//   )
// }

///////////////////////// form login signup ///////////////////////////////

// import { Button } from 'react-bootstrap';
// import BasicForm from './components/form';
// import { useState } from 'react';

// // state change kari hai yani login ke page se register ke pageb main jana and viceversa
// function App() {
//   const [type, setType] = useState("register")
//   return (
//     <div className='container'>
//       <div className='row justify-content-center'>
//         {type === 'login'
//           ?
//           < div className="col-6 p-5">
//             <h1>Login</h1>
//             <BasicForm />
//             <Button variant='link' onClick={() => setType("register")}> Register now</Button>
//           </div>
//           :
//           <div className="col-6 p-5">
//             <h1>Sign up</h1>
//             <BasicForm />
//             <Button variant='link' onClick={() => setType("login")}>Login Now</Button>
//           </div>
//         }
//       </div>
//     </div >
//   )
// }

import { Button } from 'react-bootstrap';
import BasicForm from './components/form';
import Counter from './components/counter';
import { useEffect, useState } from 'react';
function App() {

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("Talha")
  // useEffect with empty only run at first time when component render
  useEffect(() => {
    console.log("testing1...");
  }, [])

  // useEffect with without array runs everey time when component render
  useEffect(() => {
    console.log("testing2...");
  })
  // runs when the value given in array updates
  useEffect(() => {
    console.log("testing3...");
  }, [name])
  return (
    <div>
      {counter < 10 && <Counter count={counter} />}
      <button onClick={() => {
        setCounter(counter + 1)
      }}>+</button>
      <button onClick={() => {
        setCounter(counter - 1)
      }}>-</button>
      <h1>{name}</h1>
      <button onClick={() => setName("Tahir")}>Update Name</button>

    </div>
  )
}

export default App;
