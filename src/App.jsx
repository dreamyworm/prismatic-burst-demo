import PrismaticBurst from './components/PrismaticBurst'
import './App.css'

function App() {
  const burstProps = {
    animationType: 'rotate3d',
    intensity: 2,
    speed: 0.5,
    distort: 1.0,
    paused: false,
    offset: { x: 0, y: 0 },
    hoverDampness: 0.25,
    rayCount: 18,
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
    </main>
  )
}

export default App
