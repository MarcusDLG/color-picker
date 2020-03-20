import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: Math.round(Math.random() * 360),
    saturation: Math.round(Math.random() * 100),
    light: Math.round(Math.random() * 100),
    alpha: 1,
  }

  trackHue = e => {
    this.setState({
      hue: e.target.value,
    })
    console.log(this.state.hue)
  }
  trackSaturation = e => {
    console.log(e.target.value)
    this.setState({
      saturation: e.target.value,
    })
  }
  trackLight = e => {
    console.log(e.target.value)
    this.setState({
      light: e.target.value,
    })
  }
  trackAlpha = e => {
    console.log(e.target.value)
    this.setState({
      alpha: e.target.value,
    })
  }
  randomColor = () => {
    this.setState({
      hue: Math.round(Math.random() * 360),
      saturation: Math.round(Math.random() * 100),
      light: Math.round(Math.random() * 100),
      alpha: (Math.random() * 1).toFixed(2),
    })
  }

  render() {
    return (
      <>
        <main>
          <section className="leftSide">
            <h1
              style={{
                color: `hsl(${this.state.hue},
                ${this.state.saturation}%,
                ${this.state.light}%)${this.state.alpha})`,
              }}
            >
              Color
            </h1>
            <section
              className="colorBox"
              style={{
                backgroundColor: `hsla(${this.state.hue},
                ${this.state.saturation}%,
                ${this.state.light}%,${this.state.alpha})`,
              }}
            ></section>
            <h2
              style={{
                color: `hsl(${this.state.hue},
                ${this.state.saturation}%,
                ${this.state.light}%)${this.state.alpha})`,
              }}
            >
              HSLA: {this.state.hue}, {this.state.saturation}%,
              {this.state.light}%, {this.state.alpha}
            </h2>
          </section>
          <section className="rightSide">
            <section className="H">
              <p>Hue</p>
              <input
                onChange={this.trackHue}
                type="range"
                className="hue"
                name="hue"
                min="0"
                max="360"
                value={this.state.hue}
              ></input>
            </section>
            <section className="S">
              <p>Saturation</p>
              <input
                onChange={this.trackSaturation}
                type="range"
                className="saturation"
                name="saturation"
                min="0"
                max="100"
                value={this.state.saturation}
              ></input>
            </section>
            <section className="L">
              <p>Light</p>
              <input
                onChange={this.trackLight}
                type="range"
                className="light"
                name="light"
                min="0"
                max="100"
                value={this.state.light}
              ></input>
            </section>
            <section className="A">
              <p>Alpha</p>
              <input
                onChange={this.trackAlpha}
                type="range"
                className=""
                name="alpha"
                min="0"
                max="1"
                step=".01"
                value={this.state.alpha}
              ></input>
            </section>
            <button className="random" onClick={this.randomColor}>
              Random Color
            </button>
          </section>
        </main>
      </>
    )
  }
}

export default App
