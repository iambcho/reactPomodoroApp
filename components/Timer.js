import React, { Component } from 'react'

export default class Timer extends Component {
    render() {
        return (
            <div>
             <h1 style={{ fontSize: 100}}>{this.props.value}:{this.props.seconds}
             </h1>
                </div>
              );
    }
}
