import React from 'react'
import '../App.css'

const Heading = ({ heading }) => {
  return (
    <div className="box">
        <h1 id="heading">{ heading }</h1>
    </div>
  )
}

export default Heading