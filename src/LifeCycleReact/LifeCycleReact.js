import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class LifeCycleReact extends Component {
  
  render() {
    return (
      <div>
        <ChildComponent></ChildComponent>
      </div>
    )
  }
}
