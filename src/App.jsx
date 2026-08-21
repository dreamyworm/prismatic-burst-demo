import { useState } from 'react'
import PrismaticBurst from './components/PrismaticBurst'
import './App.css'

function App() {
  const [rayWidth, setRayWidth] = useState(0.5)

  const burstProps = {
    animationType: 'rotate3d',
    intensity: 2,
    speed: 0.5,
    distort: 1.0,
    paused: false,
    offset: { x: 0, y: 0 },
    hoverDampness: 0.25,
    rayCount: 18,
    rayWidth,
    mixBlendMode: 'lighten',
    colors: ['#ff007a', '#4d3dff', '#ffffff'],
  }

  return (
    <main className="app">
      <div className="burst-layer burst-layer--glow">
        <PrismaticBurst {...burstProps} intensity={1.35} />
      </div>
      <div className="burst-layer burst-layer--core">
        <PrismaticBurst {...burstProps} />
      </div>
      <div className="ray-width-control">
        <div className="ray-width-control__header">
          <label htmlFor="ray-width">光线粗细</label>
          <output htmlFor="ray-width">{rayWidth.toFixed(2)}</output>
        </div>
        <input
          id="ray-width"
          type="range"
          min="0.1"
          max="1.2"
          step="0.01"
          value={rayWidth}
          onChange={(event) => setRayWidth(Number(event.target.value))}
          aria-label="光线粗细"
        />
      </div>
    </main>
  )
}

export default App
