import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/board'>Board</Link></li>
        </ul>
      </div>
    )
  }
}

export default HomePage
