import React, { Component } from 'react'

export default class StartButton extends Component {
    render() {
        return (
            <div>
            <button style={buttonStyle} disabled={!this.props.value} onClick={this.props.startCountDown}>Start</button>
           </div>
          );
    }
}

const buttonStyle = {
    backgroundColor: '#333',
    color: '#FFF',
    padding: '10px'
}