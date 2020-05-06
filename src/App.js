import React, { useRef, useState } from "react";
import './App.css';
import CanvasDraw from 'react-canvas-draw';


export default function App() {
  const axios = require('axios').default;
  const [color, setColor] = useState('#000');
  const [width, setWidth] = useState(480);
  const [height, setHeight] = useState(480);
  const [brushRadius, setBrushRadius] = useState(50);
  const [selectedClass, setSelectedClass] = useState(0);

  const canvasRef = useRef(null);

  const updateColor = (colorStr) => {
    setColor(colorStr);
  }

  const saveFile = () => {
    if (canvasRef.current) {
      let asdf = canvasRef.current.canvasContainer.children[1].toDataURL();
      var params = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: asdf,
        cls: selectedClass
      }
      if (asdf !== "") {
        axios.post("https://sketch-completion.herokuapp.com/query", params)
          .then(response => {
            let img = new Image();
            img.src = 'data:image/png;base64,' + response.data;
            var x = document.getElementsByClassName('asdf')[0];
            if (x.hasChildNodes()) {
              x.removeChild(x.childNodes[0]);
            }
            x.appendChild(img);
          })
          .catch(error => {
            alert(error);
          });
      } else {
        alert("Image data is empty for some reason");
      }
    }
  }

  const resetCanvas = () => {
    if (canvasRef.current) {
      var banvas = canvasRef.current.canvasContainer.children[1];
      var context = banvas.getContext('2d');
      context.clearRect(0, 0, banvas.width, banvas.height);
    }
  }
  return (
    <body>

      <h1>CIFAR-10 Sketch Completion Demo</h1>
      <h4>Matthew Ye, Oliver Bryniarski, Athena Leong</h4>
      <p>Completions take about 15 seconds to generate. Your sketch will be downsampled very significantly. <br></br>For best results, avoid only drawing boundaries. Instead, use a large brush size and fill in as many parts as possible, e.g. draw a branch for a bird or a black surface for an automobile.</p>
      <div className="left">
        <div className="drawboard">
          <CanvasDraw ref={canvasRef} hideGrid={true} brushRadius={brushRadius} brushColor={color} canvasWidth={width} canvasHeight={height} />
        </div>
        <div className="buttons">
          <button style={{backgroundColor:'#b8352c'}} onClick={() => updateColor('#b8352c')}>⠀⠀</button>
          <button style={{backgroundColor:'#228B22'}} onClick={() => updateColor('#228B22')}>⠀⠀</button>
          <button style={{backgroundColor:'#1c1c94'}} onClick={() => updateColor('#1c1c94')}>⠀⠀</button>
          <button style={{backgroundColor:'#dede1d'}} onClick={() => updateColor('#dede1d')}>⠀⠀</button>
          <button style={{backgroundColor:'#57b0d4'}} onClick={() => updateColor('#57b0d4')}>⠀⠀</button>
          <button style={{backgroundColor:'#824910'}} onClick={() => updateColor('#824910')}>⠀⠀</button>
          <button style={{backgroundColor:'#000000'}} onClick={() => updateColor('#000000')}>⠀⠀</button>
          <button style={{backgroundColor:'#ffffff'}} onClick={() => updateColor('#ffffff')}>⠀⠀</button>
          <label>
          <select value={brushRadius} onChange={e => setBrushRadius(e.target.value)}>
          <option value={2}>hungry</option>
          <option value={3}>thin</option>
          <option value={5}>normal</option>
          <option value={15}>thick</option>
          <option value={50}>xtra thick</option>
          <option value={800}>fill</option>
          </select>
        </label>
        </div>
        <label>
          Pick your target class: 
          <select value={selectedClass} onChange={e => setSelectedClass(e.target.value)}>
          <option value="0">airplane</option>
          <option value="1">automobile</option>
          <option value="2">bird</option>
          <option value="3">cat</option>
          <option value="4">deer</option>
          <option value="5">dog</option>
          <option value="6">frog</option>
          <option value="7">horse</option>
          <option value="8">ship</option>
          <option value="9">truck</option>
          </select>
        </label>
        <div className="submit">
        <button onClick={() => resetCanvas()}>Reset canvas</button>
        
        <button onClick={() => saveFile()}>Complete my image!</button>
        </div>
        
      </div>
      <div className="right">
        <div className="asdf"></div>
      </div>
      
    </body>
  );
}
