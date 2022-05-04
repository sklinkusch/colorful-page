import React, { useState } from 'react'
import './App.css';

function App() {
  const [color, setColor] = useState("#ffffff")
  const changeColor = () => {
    try {
      const widthRaw = window.innerWidth || 0
      const heightRaw = window.innerHeight || 0
      const width = widthRaw > 4095 ? 4095 : widthRaw
      const height = heightRaw > 4095 ? 4095 : heightRaw
      const widthStringRaw = width.toString(16)
      const heightStringRaw = height.toString(16)
      const heightString = heightStringRaw.length === 1 
        ? `00${heightStringRaw}` 
        : heightStringRaw.length === 2
          ? `0${heightStringRaw}`
          : `${heightStringRaw}`
      const widthString = widthStringRaw.length === 1 
        ? `00${widthStringRaw}` 
        : widthStringRaw.length === 2
          ? `0${widthStringRaw}`
          : `${widthStringRaw}`
      const myColor = "#" + widthString + heightString
      setColor(myColor)
    } catch(error) {
      setColor("#ffffff")
    }
  }
  window.addEventListener("load", changeColor)
  window.addEventListener("resize", changeColor)
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: color }}>
      </header>
    </div>
  );
}

export default App;
