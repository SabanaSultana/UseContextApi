// With useContext Hook

import React , {useContext}from "react";
import { FirstName, LastName } from "./App";

// callback hell

const CompC = () => {
    const fName=useContext(FirstName)
    const lName=useContext(LastName)
  return (
    <div>
     I am {fName} {lName}
         
    </div>
  );
};

export default CompC;
















//without useContext hook......................................
// import React from 'react'
// import { FirstName,LastName } from './App'

// // callback hell

// const CompC = () => {
//   return (
//     <div>
//       <FirstName.Consumer>

//         {
//             (fname)=>{
//                 return(
//                     <LastName.Consumer> 
//                         {
//                             (lname)=>{
//                                 return <h1>my name is {fname} {lname}</h1>
//                             }
//                         }
//                     </LastName.Consumer>
//                 )
//             }
//         }
//       </FirstName.Consumer>
//     </div>
//   )
// }

// export default CompC
