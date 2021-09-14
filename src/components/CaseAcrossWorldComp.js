import {useContext} from 'react'
import {globalStore} from '../App'

const CaseAcrossWorldComp = () => {

  const {casesAcrossWorld} = useContext(globalStore)
  //console.log(casesAcrossWorld)

  const {cases, deaths} = casesAcrossWorld
  //console.log(cases)
  //console.log(deaths)

  return (
    <div className="w-full flex justify-evenly bg-red-400 items-center text-center my-4">
      <div className="w-1/4 h-20 flex justify-center items-center flex-col bg-yellow-300 rounded-lg">
        <p>Total Cases</p>
        <p>{casesAcrossWorld ? cases.total : "loading..."}</p>
      </div>
      <div className="w-1/4 h-20 flex justify-center items-center flex-col bg-yellow-300 rounded-lg">
        <p>Recovered Cases</p>
        <p>{casesAcrossWorld ? cases.recovered : "loading..."}</p>
      </div>
      <div className="w-1/4 h-20 flex justify-center items-center flex-col bg-yellow-300 rounded-lg">
        <p>Death Cases</p>
        <p>{casesAcrossWorld ? deaths.total : "loading..."}</p>
      </div>
    </div>
  )
}

export default CaseAcrossWorldComp
