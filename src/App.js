// import React, { useState } from "react";

// function App() {
//   const state = useState()
//   const [count, setcount] = useState(0)


//   let Inc = () => {
//     setcount(count+1)
//     // console.log('clicked ' + count)
//   }
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={Inc}>Click me</button>
//     </>
//   )
// }
// export default App;

//Practice-2

// import React, { useState } from "react";

// function App()
// {
// const time = new Date().toLocaleTimeString()

// const [currTime , updateTime] = useState(time)

// let getTime = () =>
// { 
//   let x = new Date().toLocaleTimeString()
//   updateTime(x)
// }
//   return(
//     <>
//     <h1>{currTime}</h1>
//     <button onClick={getTime}>Get Time</button>
//     </>
//   )
// }
// export default App;

//Practice-3
// import React, { useState } from "react";
// import './index.css'

// function App() {
//   const bg1 = 'white'
//   const [currState, updateState] = useState(bg1)

//    const mode = () => {
//     const bg2 = 'black'
//     updateState(bg2)

//   }
//   return (
//     <div style={{ backgroundColor: currState , height : '100vh' , width : '100%' }}>

//         <button onClick={mode}>Light/Dark</button>

//     </div>
//   );
// }
// export default App;

//useEffect Practice

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [count, setcount] = useState(0)

//    useEffect(() =>
//   {
//    if(count >= 1)
//    {
//     document.title = `Chats(${count})`
//    }
//     else{
//       document.title = `Chat`
//     }
//   })
//   const clikedMe = () => {
//     setcount(count + 1)
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={clikedMe}>Click</button>
//     </>
//   )
// }
// export default App;

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [count, setcount] = useState(0)

//   useEffect(() => {
//     alert('Thanks')
//   },[])
//   const clikedMe = () => {
//     setcount(count + 1)
//   }


//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={clikedMe}>Click</button>
//     </>
//   )
// }
// export default App;

// import React, { useState } from "react";

// function App()
// {
//   let time = new Date().toLocaleTimeString()

//   const [currTime , SetcurrTime] = useState(time)

// let getTime = () =>
// {
//   let time = new Date().toLocaleTimeString()
//   SetcurrTime(time) 
// }

//   return(
//     <>
//     <h1>{currTime}</h1>
//     <button onClick={getTime}>Get Time</button>
//     </>
//   )
// }
// export default App;

//practice-1 Increment counter
// import React, { useState } from "react";
// let App = () =>
// {
//   const [currValue , updateValue] = useState(0)

// let ChangeText = () =>
// {
//   var count =  currValue + 1
//   updateValue(count)
//   // console.log('Clicked')
// }


//   return(
//     <>
//     <h1>{currValue}</h1>
//     <button onClick={ChangeText}>Click Me</button>
//     </>
//   )
// }
// export default App;

//Practice-2 text change
// import React, { useState } from "react";
// let App = () =>
// {
//   const [currValue , updateValue] = useState('How are u !')

// let ChangeText = () =>
// {
//   var text = 'I am fine'
//   updateValue(text)
//   // console.log('Clicked')
// }


//   return(
//     <>
//     <h1>{currValue}</h1>
//     <button onClick={ChangeText}>Click Me</button>
//     </>
//   )
// }
// export default App;


//Practice-3 toogle-text simple
// import React, { useState } from "react";
// let App = () =>
// {
//   const [currValue , updateValue] = useState('How are u !')

// let ChangeText = () =>
// { 
//   // var text1 = 'How are u !'
//   if(currValue == 'How are u !'){
//     updateValue('I am fine')
//   }
//   else
//   {
//     updateValue('How are u !')
//   }
// }
//   return(
//     <>
//     <h1>{currValue}</h1>
//     <button onClick={ChangeText}>Click Me</button>
//     </>
//   )
// }
// export default App;

//Practice-4 ArrayOfObject using useState and clearData
// import React, { useState } from "react";
// let App = () => {

//   const Array1 = [
//     {
//       id: 0, name: 'sumair', age: 24
//     }
//     , {
//       id: 0, name: 'uzair', age: 25
//     }
//     , {
//       id: 0, name: 'umair', age: 28
//     }
//   ]
//   const [currValue, setValue] = useState(Array1)
//   let clearData = () => {
//     setValue([])
//   }
//   return (
//     <>
//       {
//         currValue.map((data) =>  <h1>Name : {data.name}  & Age : {data.age}</h1>)

//       }
//       <button onClick={clearData}>Clear</button>
//     </>
//   )
// }
// export default App;


// import React, {  useState } from "react";
// const App = () => {

//   const [currObject , setObject] = useState({ Name: 'Sumair', Age: 24, Job: 'Web Developer' })

//   let ChangeData = () =>
//   {
//     setObject({...currObject , Age : 45})
//   }
//   return (
//     <>
//       <h1>Name : {currObject.Name} & Age : {currObject.Age} & Job : {currObject.Job}</h1>
//       <button onClick={ChangeData}>Update</button>
//     </>
//   )
// }
// export default App;

//useEffect
// import React, { useEffect, useState } from "react";

// const App = () => {

//   const [currValue, setValue] = useState(0)
//   useEffect(() => {
//     if (currValue == 0) {
//       document.title = `Chats`
//     }
//     else {
//       document.title = `Chats(${currValue})`
//     }
//   },[currValue])
//   let send = () => {

//     var change = currValue + 1
//     setValue(change)
//   }

//   let reset = () => {
//     setValue(0)
//   }
//   return (
//     <>
//       <h1>{currValue}</h1>
//       <button onClick={send}>Send</button>
//       <button onClick={reset}>Reset</button>
//     </>
//   )
// }
// export default App;


//custom hooks
import React, { useState } from "react";
import useCustomhook from "./useCustomhook";

const App = () => {
  const [count, setcount] = useState(0)

  useCustomhook(count)

  let inc = () => {
    setcount(count + 1)
  }
  return (
    <button onClick={inc}>Send</button>
  )
}
export default App;

