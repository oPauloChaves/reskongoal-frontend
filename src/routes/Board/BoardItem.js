import React from 'react'
import PropTypes from 'prop-types'

const BoardItem = ({ id, name, description, classes }) => {
  return (
    <div className={classes.Item}>
      <h3 className={classes.Item__name}>{`#${id} ${name}`}</h3>
      <p>{description}</p>
    </div>
  )
}

BoardItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default BoardItem
