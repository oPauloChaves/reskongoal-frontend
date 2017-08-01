import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.scss'

class Header extends Component {
  render() {
    return (
      <div className={`row ${classes.Header}`}>
        <h1 className={classes.title}><Link to='/'>Project</Link></h1>
      </div>
    )
  }
}

export default Header
