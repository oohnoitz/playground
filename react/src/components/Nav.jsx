import React, { Component } from 'react'

const NavHeader = ({ children }) =>
  <header className='mdl-layout__header'>
    <div className='mdl-layout__header-row'>
      <span className='mdl-layout-title'>Fifty-Two</span>
      <div className='mdl-layout-spacer'></div>
      <nav className='mdl-navigation mdl-layout--large-screen-only'>
        {children}
      </nav>
    </div>
  </header>

const NavDrawer = ({ children }) =>
  <div className='mdl-layout__drawer'>
    <span className='mdl-layout-title'>Fifty-Two</span>
    <nav className='mdl-navigation'>
      {children}
    </nav>
  </div>

const NavLink = ({ href, children }) =>
  <a className='mdl-navigation__link' href={href}>{children}</a>

export default class Nav extends Component {
  render() {
    return [
      (
        <NavHeader key='header'>
        </NavHeader>
      ),
      (
        <NavDrawer key='drawer'>
          <NavLink href='#/2017'>2017</NavLink>
          <NavLink href='#/2016'>2016</NavLink>
        </NavDrawer>
      ),
    ]
  }
}
