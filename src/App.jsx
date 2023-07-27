import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import Card from './components/Card.jsx'
import ProductPage from './components/ProductPage.jsx'


// const myProducts = []

// const reusingCard = <Card />


function App() { 
  //////// js 

  const adiasUltra = "Ultra Boost - Adidas - $160"
  const airForceOnes = "Air Force One Low - Nike - $100"

  ////////  js
  return (
    <>
    {/* JSX */}


      <div id="logo-images-lol">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Veet/Vite/Veetay + React</h1>

      {/* <Card /> */}

      {/* {reusingCard} */}


      <ProductPage />


      {/* <li>Ultra Boost - Adidas - $160</li> */}
      {/* 
          <li>{adiasUltra}</li>
          <li>{airForceOnes}</li> 
      */}



    
    

    {/* JSX */}     
    </>
  )
}

export default App


// A "refresh" is a RE-SET ; A rerender, remembers  - Sam 🙏🏾🧘🏾‍♂️🪷💫


// const myVar = "Yur"