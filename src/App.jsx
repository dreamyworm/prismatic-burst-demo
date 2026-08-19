import PrismaticBurst from './components/PrismaticBurst'
import './App.css'

function App() {
  return (
    <main className="app">
      <div className="burst-container">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="lighten"
          colors={['#ff007a', '#4d3dff', '#ffffff']}
        />
      </div>
    </main>
  )
}

export default App