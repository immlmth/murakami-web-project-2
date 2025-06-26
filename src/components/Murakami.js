import React from 'react'
import "./Murakami.css"


function Murakami({murakami}) {
    return (
        <div className="murakami-container">
            {murakami.map((murakami, index) => (
                <img
                    key={index}
                    src={murakami.image}
                    style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
                />
            ))}
        </div>

    )
}

export default Murakami