import React, { Component } from 'react'

export class Slider extends Component {
  render() {
    return (
      <section className={this.props.className}>
        <p>{this.props.descriptor}</p>
        <input
          type="range"
          className={this.props.class}
          name={this.props.name}
          value={this.props.value}
          min={this.props.min}
          max={this.props.max}
        ></input>
      </section>
    )
  }
}

export default Slider
