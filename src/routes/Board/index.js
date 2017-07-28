import React, { Component } from 'react'

const Project = ({ id, name, description, color}) => (
  <div className='col sm-col--1of4'>
    <div style={{backgroundColor: color}}>
      <h3>{`#${id} ${name}`}</h3>
      <p>{description}</p>
    </div>
  </div>
)

class BoardPage extends Component {
  render() {
    const { appdata : { projects = [] } } = this.props

    return (
      <div>
        <h1>Board Page</h1>
        <div className='row row--gutters'>
          {projects.map(p => <Project key={p.id} {...p} />)}
        </div>
      </div>
    )
  }
}

export default BoardPage
