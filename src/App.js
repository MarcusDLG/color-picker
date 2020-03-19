import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: 180,
    saturation: 50,
    light: 50,
  }

  trackHue = e => {
    // console.log(e.target.value)
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

  render() {
    return (
      <>
        <main>
          <aside className="leftSide">
            <h1>Color</h1>
            <section
              className="ColorBox"
              style={{
                backgroundColor: `hsl(${this.state.hue},${this.state.saturation},${this.state.light})`,
              }}
            >
              {' '}
            </section>
          </aside>
          <section className="rightSide">
            <section className="H">
              <p>Hue</p>
              <input
                onChange={this.trackHue}
                type="range"
                class="hue"
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
                class="saturation"
                name="saturation"
                min="0"
                max="100"
                value=""
              ></input>
            </section>
            <section className="L">
              <p>Light</p>
              <input
                onChange={this.trackLight}
                type="range"
                class="light"
                name="light"
                min="0"
                max="100"
                value=""
              ></input>
            </section>
          </section>
        </main>
      </>
    )
  }
}

export default App
