import { useContext, useState } from 'react'
import { globalStore } from '../App'
const WorldStatsComp = () => {
  let { worldStats } = useContext(globalStore)
  //worldStats.splice(0, 3)

  let initFilterState = {
    newCase: true,
    Asia: false,
    Europe: false,
    Africa: false,
    NorthAmerica: false,
    SouthAmerica: false,
    Oceania: false,
  }
  const [filterTab, setFilterTabs] = useState(initFilterState)

  console.log(worldStats)

  //sort on the basis of new cases
  //

  //According to this array will change
  const filterTabHandler = () => {
    if (filterTab.newCase) {
      worldStats.forEach((element) => {
        if (element.cases.new === null) {
          element.cases.new = 0
        }
      })
      worldStats.sort((a, b) => parseInt(b.cases.new) - parseInt(a.cases.new))
    }

    if (filterTab.Asia) {
     worldStats =  worldStats.filter((val) =>{

        return val.continent === "Asia"
      })
    }

    if (filterTab.Africa) {
      worldStats =  worldStats.filter((val) =>{
 
         return val.continent === "Africa"
       })
     }

     if (filterTab.NorthAmerica) {
      worldStats =  worldStats.filter((val) =>{
 
         return val.continent === "North-America"
       })
     }

     if (filterTab.SouthAmerica) {
      worldStats =  worldStats.filter((val) =>{
 
         return val.continent === "South-America"
       })
     }


     if (filterTab.Oceania) {
      worldStats =  worldStats.filter((val) =>{
 
         return val.continent === "Oceania"
       })
     }

     if (filterTab.Europe) {
      worldStats =  worldStats.filter((val) =>{
 
         return val.continent === "Europe"
       })
     }



   
  }
  filterTabHandler()

  return (
    <div className="w-full bg-gray-100 flex flex-col justify-center  text-gray-800 my-4 ">
      <div className="flex w-2/4 justify-around">
        <div
          className={
            filterTab.newCase
              ? 'py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
          }
          onClick={() => setFilterTabs({ ...initFilterState, newCase: true })}
        >
          New Cases
        </div>
        <div
          className={
            filterTab.Asia
              ? 'py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
          }
          onClick={() =>
            setFilterTabs({ ...initFilterState, newCase: false, Asia: true })
          }
        >
          Asia
        </div>
        <div
          className={
            filterTab.Africa
              ? 'py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
          }
          onClick={() =>
            setFilterTabs({ ...initFilterState, newCase: false, Africa: true })
          }
        >
          Africa
        </div>
        <div
          className={
            filterTab.Europe
              ? 'py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
          }
          onClick={() =>
            setFilterTabs({ ...initFilterState, newCase: false, Europe: true })
          }
        >
          Europe
        </div>
        <div
          className={
            filterTab.NorthAmerica
              ? 'py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
          }
          onClick={() =>
            setFilterTabs({
              ...initFilterState,
              newCase: false,
              NorthAmerica: true,
            })
          }
        >
          North America
        </div>
        <div
          className={
            filterTab.SouthAmerica
              ? 'py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
          }
          onClick={() =>
            setFilterTabs({
              ...initFilterState,
              newCase: false,
              SouthAmerica: true,
            })
          }
        >
          South America
        </div>
        <div
          className={
            filterTab.Oceania
              ? 'py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
          }
          onClick={() =>
            setFilterTabs({ ...initFilterState, newCase: false, Oceania: true })
          }
        >
          Oceania
        </div>
      </div>
      <table className="w-full text-center border-solid border border-light-blue-500">
        <tr className="border-solid border border-light-blue-500">
          <th>#</th>
          <th>Country</th>
          <th>Total Cases</th>
          <th>New Cases</th>
          <th>Recovered Cases</th>
          <th>Active Cases</th>
          <th>Critical Cases</th>
          <th>Death Cases</th>
        </tr>

        {worldStats.map((val, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{val.country}</td>
            <td>{val.cases.total}</td>
            <td>{val.cases.new}</td>
            <td>{val.cases.recovered}</td>
            <td>{val.cases.active}</td>
            <td>{val.cases.critical}</td>
            <td>{val.deaths.total}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default WorldStatsComp
