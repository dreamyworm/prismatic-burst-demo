import { useState } from 'react'
import PrismaticBurst from './components/PrismaticBurst'
import './App.css'

function App() {
  const [rayWidth, setRayWidth] = useState(0.5)
  const [rayCount, setRayCount] = useState(18)
  const [glowIntensity, setGlowIntensity] = useState(1.35)
  const [blurStrength, setBlurStrength] = useState(0)
  const [colors, setColors] = useState(['#ff007a', '#4d3dff', '#ffffff'])

  const burstProps = {
    animationType: 'rotate3d',
    intensity: 2,
    speed: 0.5,
    distort: 1.0,
    paused: false,
    offset: { x: 0, y: 0 },
    hoverDampness: 0.25,
    rayCount,
    rayWidth,
    mixBlendMode: 'lighten',
    colors,
  }

  return (
    <main className="app">
      <div
        className="burst-visual"
        style={{
          filter: `blur(${blurStrength}px)`,
          transform: `scale(${1 + blurStrength * 0.003})`,
        }}
      >
        <div className="burst-layer burst-layer--glow">
          <PrismaticBurst {...burstProps} intensity={glowIntensity} />
        </div>
        <div className="burst-layer burst-layer--core">
          <PrismaticBurst {...burstProps} />
        </div>
      </div>
      <div className="burst-controls">
        <section className="burst-control">
          <div className="burst-control__header">
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
          />
        </section>

        <section className="burst-control">
          <div className="burst-control__header">
            <label htmlFor="ray-count">光线数量</label>
            <output htmlFor="ray-count">{rayCount}</output>
          </div>
          <input
            id="ray-count"
            type="range"
            min="4"
            max="48"
            step="1"
            value={rayCount}
            onChange={(event) => setRayCount(Number(event.target.value))}
          />
        </section>

        <section className="burst-control">
          <div className="burst-control__header">
            <label htmlFor="glow-intensity">光晕强度</label>
            <output htmlFor="glow-intensity">{glowIntensity.toFixed(2)}</output>
          </div>
          <input
            id="glow-intensity"
            type="range"
            min="0"
            max="3"
            step="0.05"
            value={glowIntensity}
            onChange={(event) => setGlowIntensity(Number(event.target.value))}
          />
        </section>

        <section className="burst-control">
          <div className="burst-control__header">
            <label htmlFor="blur-strength">画面模糊</label>
            <output htmlFor="blur-strength">{blurStrength.toFixed(1)} px</output>
          </div>
          <input
            id="blur-strength"
            type="range"
            min="0"
            max="20"
            step="0.5"
            value={blurStrength}
            onChange={(event) => setBlurStrength(Number(event.target.value))}
          />
        </section>

        <fieldset className="color-controls">
          <legend>光线颜色</legend>
          <div className="color-controls__swatches">
            {colors.map((color, index) => (
              <label className="color-control" key={index}>
                <span>颜色 {index + 1}</span>
                <input
                  type="color"
                  value={color}
                  onChange={(event) => {
                    const nextColor = event.target.value
                    setColors((current) =>
                      current.map((item, colorIndex) =>
                        colorIndex === index ? nextColor : item,
                      ),
                    )
                  }}
                />
              </label>
            ))}
          </div>
        </fieldset>
      </div>
    </main>
  )
}

export default App
