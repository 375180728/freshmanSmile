import React from 'react'

const Item = ({match}) => (
  <div>
    <h3>{match.params.ItemId}</h3>
  </div>
)

export default Item