import React from 'react'
import State from './State'

const Central = ({data}) => {
  return (
    <div>
      <h1> This is central gov </h1> 
      <State data = {data}/>
    </div>
  )
}

export default Central
