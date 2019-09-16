import React, { Component } from 'react'

export default class TimerInput extends Component {
    render() {
        return (
            <div style={timerInput}>
               <h3>Input your desired time</h3>
               <input type="number" value={this.props.value} onChange={this.props.handleChange} required />
           </div>
              );
    }
}


const timerInput = {
    marginTop: '50px'
  }

