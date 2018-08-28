import React from 'react'

const Classes = ({match}) => (
  <div>
    <h3>{match.params.ClassId}</h3>
  </div>
)

export default Classes