import React, { Component } from 'react'
import Nav from './Nav'

export default class App extends Component {
  render() {
    return (
      <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
        <Nav/>
      </div>
    )
  }
}
