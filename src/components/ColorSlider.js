import React, { Component } from 'react'
import Slider from './Slider'

export class ColorSlider extends Component {
  render() {
    const sliders = [
      {
        className: 'H',
        class: 'hue',
        name: 'hue',
        descriptor: 'Hue',
        min: '0%',
        max: '360%',
      },
      {
        className: 'S',
        class: 'saturation',
        name: 'saturation',
        descriptor: 'Saturation',
        min: '0%',
        max: '100%',
      },
      {
        className: 'H',
        class: 'light',
        name: 'light',
        descriptor: 'Light',
        min: '0%',
        max: '100%',
      },
    ]
    return (
      <section className="rightSide">
        {sliders.map(slider => {
          return (
            <Slider
              className={sliders.className}
              class={slider.className}
              name={slider.name}
              descriptor={slider.descriptor}
            />
          )
        })}
      </section>
    )
  }
}

export default ColorSlider
