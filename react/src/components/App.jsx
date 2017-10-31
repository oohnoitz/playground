import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Nav from './Nav'

export default class App extends Component {
  render() {
    return (
      <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
        <Nav/>
        <ErrorBoundary>

        </ErrorBoundary>
      </div>
    )
  }
}
