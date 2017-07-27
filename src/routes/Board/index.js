import React, { Component } from 'react'

const Project = ({ id, name, description, color}) => (
  <div className='col' style={{backgroundColor: color}}>
    <h3>{`#${id} ${name}`}</h3>
    <p>{description}</p>
  </div>
)

class BoardPage extends Component {
  render() {
    const { appdata : { projects = [] } } = this.props

    return (
      <div>
        <h1>Board Page</h1>
        <div className="row">
          {projects.map(p => <Project key={p.id} {...p} />)}
        </div>
      </div>
    )
  }
}

export default BoardPage
