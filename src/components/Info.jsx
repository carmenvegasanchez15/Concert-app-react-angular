import React, { useState } from 'react'

export const Info = ({result}) => {
    const [state, setState] = useState(false)

    const handleClick = () => {
        setState(current => !current);
    };


  return (
    <div className="info">
        <h3 className="name-concert" onClick={handleClick}>{result.concert}</h3>
        <div className={state ? 'show' : 'hidden'}  >
            <p><b>Artist:</b> {result.artist}</p>
            <p><b>City:</b> {result.city}</p>  
            <img src={result.image}/>
        </div>
    </div>
  )
}
