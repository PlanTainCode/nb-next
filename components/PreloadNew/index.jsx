import React from 'react'

function PreloadNew({title, description, date}) {
  return (
    <div className="preloadnews">
      <div className="preloadnews__text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
        <span>{date}</span>
    </div>
  )
}

export default PreloadNew