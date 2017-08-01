import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BoardItem from './BoardItem'
import classes from './Board.scss'

class BoardPage extends Component {
  render() {
    const { appdata: { projects = [] } } = this.props

    const renderItems = () => projects.map(p => (
      <div key={p.id} className='col sm-col--1of4'>
        <Link className={classes.anchor} to={`/projects/${p.id}`}>
          <BoardItem {...p} classes={classes} />
        </Link>
      </div>
    ))

    return (
      <div>
        <div style={{ padding: '20px' }}>
          <h1 className={classes.title}>Board Page</h1>
          <div className='row row--gutters'>
            {renderItems()}
          </div>
        </div>
      </div>
    )
  }
}

export default BoardPage
