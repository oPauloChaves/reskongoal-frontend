import React, { Component } from 'react'

import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='row'>
          Content
        </div>
      </div>
    )
  }
}

export default App
