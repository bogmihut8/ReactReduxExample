import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar"
          aria-label="main navigation"
          style={{
            borderBottom: 'solid 1px #dddddd',
            padding:'5px 1.25rem'
          }}>
        <div className="navbar-brand">
            <NavLink className="navbar-item" to="/">
              <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fab fa-bimobject"></i>
              </span>
              <strong>ReactReduxWebsite</strong>
            </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-end">
            <a className="navbar-item">
              <span className="icon" style={{ marginRight: 5 }}>
                <i className="fas fa-code"></i>
              </span>
              Projects
            </a>
            <a className="navbar-item">
              <span className="icon" style={{ marginRight: 5 }}>
                <i className="far fa-address-card"></i>
              </span>
              Resume
            </a>
            <NavLink className="navbar-item" to="/blog" activeClassName="is-active">
              <span className="icon" style={{ marginRight: 5 }}>
                <i className="far fa-rss-square"></i>
              </span>
                Blog
            </NavLink>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header