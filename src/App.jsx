import { createContext, useState } from 'react'
import CompA from './CompA'


const FirstName=createContext()
const LastName=createContext()
function App() {  
  return (
    <div>
      <h1>APP</h1>
      <FirstName.Provider value={"Sabana"}>
        <LastName.Provider value={"Sultana"}>
        <CompA />{" "}

        </LastName.Provider>
      </FirstName.Provider>
      
    </div>
  );
}

export default App

export {FirstName,LastName}
