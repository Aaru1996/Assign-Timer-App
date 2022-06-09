import React from 'react'
import Timer from './Timer';

const IncrementTimer = () => {
    const limit={start:5, end:10}
  return (
    <div>
        <Timer value={limit} />
    </div>
  )
}

export default IncrementTimer;