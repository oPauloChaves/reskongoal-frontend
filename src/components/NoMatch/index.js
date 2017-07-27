import React from 'react'

const NoMatch = ({history}) => (
  <div>
    <h2>404 - Not Found!</h2>
    <input
      type='button'
      value='Go back'
      onClick={() => history.goBack()}
    />
  </div>
)

export default NoMatch
