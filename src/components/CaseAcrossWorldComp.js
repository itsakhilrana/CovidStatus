import React from 'react'

const CaseAcrossWorldComp = () => {
  return (
    <div className="w-full flex justify-evenly bg-red-400 items-center text-center">
      <div className="w-1/4 h-20 flex justify-center items-center flex-col bg-yellow-300 rounded-lg">
        <p>Total Cases</p>
        <p>226,150,728</p>
      </div>
      <div className="w-1/4 h-20 flex justify-center items-center flex-col bg-yellow-300 rounded-lg">
        <p>Recovered Cases</p>
        <p>202,799,773</p>
      </div>
      <div className="w-1/4 h-20 flex justify-center items-center flex-col bg-yellow-300 rounded-lg">
        <p>Death Cases</p>
        <p>4,653,455</p>
      </div>
    </div>
  )
}

export default CaseAcrossWorldComp
