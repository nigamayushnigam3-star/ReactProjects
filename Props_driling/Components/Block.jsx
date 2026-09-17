import React from 'react'
import People from './People'

const Block = ({data}) => {
  return (
    <div>
      <h1> This is block gov </h1>
      <People data={data}/>
    </div>
  )
}

export default Block
