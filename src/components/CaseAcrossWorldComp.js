import {useContext} from 'react'
import {globalStore} from '../App'

const CaseAcrossWorldComp = () => {

  const {casesAcrossWorld} = useContext(globalStore)
  //console.log(casesAcrossWorld)

  const {cases, deaths} = casesAcrossWorld
  //console.log(cases)
  //console.log(deaths)

  return (
    <div className="w-full px-2 md:px-10 space-x-2 flex text-xs md:text-base justify-evenly items-center text-center my-4">
      <div className="w-2/6 md:w-1/4 md:h-20 p-2 text-red-500 flex justify-center items-center flex-col bg-red-300 rounded-lg">
        <p>Total Cases</p>
        <p className="font-bold ">{casesAcrossWorld ? cases.total : "loading..."}</p>
      </div>
      <div className="w-2/6 md:w-1/4 p-2 md:h-20 text-green-500 flex justify-center items-center flex-col bg-green-300 rounded-lg">
        <p>Recovered Cases</p>
        <p className="font-bold">{casesAcrossWorld ? cases.recovered : "loading..."}</p>
      </div>
      <div className="w-2/6 md:w-1/4 p-2 md:h-20 text-blue-500 flex justify-center items-center flex-col bg-blue-300 rounded-lg">
        <p>Death Cases</p>
        <p className="font-bold">{casesAcrossWorld ? deaths.total : "loading..."}</p>
      </div>
    </div>
  )
}

export default CaseAcrossWorldComp
