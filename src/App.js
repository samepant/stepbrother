import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      height: 800,
      isStacked: false
    }
  }

  componentDidMount() {
    this.updateHeight()
    window.addEventListener("resize", this.updateHeight.bind(this))
  }

  updateHeight () {
    const height = window.innerHeight
    const width = window.innerWidth

    if (width > 1200) {
      //side by side
      this.setState({
        height: height,
        isStacked: false
      })
    } else {
      //stacked
      const newHeight = width / 0.8
      this.setState({
        height: newHeight,
        isStacked: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className={ this.state.isStacked ? 'container stacked' : 'container' } style={{height: this.state.height}}>
          <img alt='title' src='/images/title-all.png' id='title' />
          <img alt='date' src='/images/date.png' id='date' />
          <img alt='collaborators' src='/images/collaborators.png' id='collaborators' />
          <img alt='cranbrook' src='/images/cranbrook.png' id='cranbrook' />
          <img alt='address' src='/images/address.png' id='address' />
          <img alt='snake' src='/images/snake.png' id='snake' />
        </div>
        <div className={ this.state.isStacked ? 'container stacked' : 'container' } style={{height: this.state.height}}>
          <img alt='bigtower' src='/images/bigtower.png' id='bigtower' />
          <img alt='stepbrother' src='/images/stepbrother.png' id='stepbrother' />
          <img alt='bookdune' src='/images/bookdune.png' id='bookdune' />
        </div>
      </div>
    );
  }
}

export default App;
