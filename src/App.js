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

import React, {  useState } from "react";
const App = () => {

  const [currObject , setObject] = useState({ Name: 'Sumair', Age: 24, Job: 'Web Developer' })

  let ChangeData = () =>
  {
    setObject({...currObject , Age : 45})
  }
  return (
    <>
      <h1>Name : {currObject.Name} & Age : {currObject.Age} & Job : {currObject.Job}</h1>
      <button onClick={ChangeData}>Update</button>
    </>
  )
}
export default App;
