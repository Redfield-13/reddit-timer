import React from 'react'

function Rows() {
  return (
    <div className="sqr">
                        {Array(24).fill(0).map((_, index) => (
                            <div key={index} className="spn">
                            <p className="spn-textt">0</p>
                            </div>
                        ))}
    </div>
  )
}

export default Rows