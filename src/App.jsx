import './App.css'
import Plot from 'react-plotly.js'
import { useState } from 'react'

function App() {
  const [axisX, setAxisX] = useState({
    point1:1,
    point2:2,
    point3:3,
    point4:4,
  })

  const [axisY, setAxisY] = useState({
    point1:10,
    point2:15,
    point3:13,
    point4:17,
  })
  return (
    <>
      <h1>hola mundo</h1>
      <div>
        <Plot
        data={[
         /*  {
            x: [axisX.point1,axisX.point2,axisX.point3,axisX.point4,],
            y: [axisY.point1,axisY.point2,axisY.point3,axisY.point4,],
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red'},
            name: 'trazo rojo 1'
          }, */
          {
            x: [125,250,500,1000,2000,4000,8000], // Datos internos en el eje X
            y: [10,10,10,10,10,10,10],  
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red'},
            name: 'trazo azul 1'
          },
          {
            x: [125,250,500,1000,2000,4000,8000], // Datos internos en el eje X
            y: [30,30,30,30,30,30,30],  
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'blue'},
            name: 'trazo azul 1'
          },
        ]}
        layout={{
          width: 900,
          height: 600 ,
          margin: { b: 100},
          title: 'grafico de algo',
          xaxis: {
            range: [125, 8000], // Rango visual del eje X
            title: 'Eje X',
            automargin: true
          },
          yaxis: {
            range: [-10, 120], // Rango visual del eje Y
            title: 'Eje Y',
            tickvals: [-10, 0,10,20, 40, 60, 80, 100, 120],
            automargin: true, 
          },
        }}
        />
      </div>
      <div>
        <h1>izquierda</h1>
        <ul>
          <li>
            <p>Aire</p>
            <input/>
          </li>
          <li>
            <p>Hueso</p>
            <input/>
          </li>
          <li>
            <p>Mascara de aire</p>
            <input/>
          </li>
          <li>
            <p>Mascara de hueso</p>
            <input/>
          </li>
        </ul>
      </div>
      
    </>
  )
}

export default App
