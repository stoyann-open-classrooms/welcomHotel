import React from 'react'

function Showcase({titleSpan , title , text , roomNumber, room}) {
  return (
    <div id="showcase">
    <div class="container">
      <div class="showcase-content">
        <h1><span class="text-primary">{titleSpan}</span>{title}</h1>
        <h1><span> {room}</span> {roomNumber}</h1>
        <p class="lead">{text}</p>
        
      </div>
    </div>
  </div>
  )
}

export default Showcase