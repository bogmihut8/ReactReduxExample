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
              <strong>ReactWebsite</strong>
            </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-end">
            <NavLink className="navbar-item" to="/projects" activeClassName="is-active">
                Projects
            </NavLink>
            <NavLink className="navbar-item" to="/technologies" activeClassName="is-active">
                Technologies
            </NavLink>
            <NavLink className="navbar-item" to="/blog" activeClassName="is-active">
                Blog
            </NavLink>
            <NavLink className="navbar-item" to="/contact" activeClassName="is-active">
                Contact
            </NavLink>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header