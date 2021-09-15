import { useContext, useState } from 'react'
import { globalStore } from '../App'
const WorldStatsComp = () => {
  let { worldStats } = useContext(globalStore)
  //worldStats.splice(0, 3)
  console.log(worldStats)

  let initFilterState = {
    newCase: true,
    Asia: false,
    Europe: false,
    Africa: false,
    NorthAmerica: false,
    SouthAmerica: false,
    Oceania: false,
    deathPerM: false,
    casesPerM: false,
  }
  //const tabsData = JSON.parse(localStorage.getItem('filterTabs'))

  const [filterTab, setFilterTabs] = useState(initFilterState)

  //localStorage.setItem('filterTabs', JSON.stringify(filterTab))

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
      worldStats = worldStats.filter((val) => {
        return val.continent === 'Asia'
      })
      worldStats.sort((a, b) => parseInt(b.cases.new) - parseInt(a.cases.new))
    }

    if (filterTab.Africa) {
      worldStats = worldStats.filter((val) => {
        return val.continent === 'Africa'
      })
     worldStats.sort((a, b) => parseInt(b.cases.new) - parseInt(a.cases.new))
    }

    if (filterTab.NorthAmerica) {
      worldStats = worldStats.filter((val) => {
        return val.continent === 'North-America'
      })
      worldStats.sort((a, b) => parseInt(b.cases.new) - parseInt(a.cases.new))
    }

    if (filterTab.SouthAmerica) {
      worldStats = worldStats.filter((val) => {
        return val.continent === 'South-America'
      })
      worldStats.sort((a, b) => parseInt(b.cases.new) - parseInt(a.cases.new))
    }

    if (filterTab.Oceania) {
      worldStats = worldStats.filter((val) => {
        return val.continent === 'Oceania'
      })
      worldStats.sort((a, b) => parseInt(b.cases.new) - parseInt(a.cases.new))
    }

    if (filterTab.Europe) {
      worldStats = worldStats.filter((val) => {
        return val.continent === 'Europe'
      })
     worldStats.sort((a, b) => parseInt(b.cases.new) - parseInt(a.cases.new))
    }

    if (filterTab.deathPerM) {
      worldStats.forEach((element) => {
        if (element.deaths['1M_pop'] === null) {
          element.deaths['1M_pop'] = 0
        }
      })
      worldStats.sort(
        (a, b) => parseInt(b.deaths['1M_pop']) - parseInt(a.deaths['1M_pop'])
      )
    }

    if (filterTab.casesPerM) {
      worldStats.forEach((element) => {
        if (element.cases['1M_pop'] === null) {
          element.cases['1M_pop'] = 0
        }
      })
      worldStats.sort(
        (a, b) => parseInt(b.cases['1M_pop']) - parseInt(a.cases['1M_pop'])
      )
    }
  }
  filterTabHandler()

  return (
    <div className="w-full px-2 md:px-10  flex flex-col justify-center  text-gray-800 my-4 ">
      <div className="w-full flex flex-wrap md:flex-none md:w-4/5 space-x-2 my-2">
        <div
          className={
            filterTab.newCase
              ? 'my-1 py-1 px-1 md:px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'my-1 py-1 px-1 md:px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
          }
          onClick={() => {
            setFilterTabs({ ...initFilterState, newCase: true })
          }}
        >
          New Cases
        </div>
        <div
          className={
            filterTab.Asia
              ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
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
              ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
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
              ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
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
              ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
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
              ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
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
              ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
          }
          onClick={() =>
            setFilterTabs({ ...initFilterState, newCase: false, Oceania: true })
          }
        >
          Oceania
        </div>

        <div
          className={
            filterTab.deathPerM
              ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
          }
          onClick={() =>
            setFilterTabs({
              ...initFilterState,
              newCase: false,
              deathPerM: true,
            })
          }
        >
          Deaths Per 1m
        </div>

        <div
          className={
            filterTab.casesPerM
              ? 'my-1 py-1 px-3 bg-red-500 text-gray-50 rounded-sm text-xs'
              : 'my-1 py-1 px-3 bg-gray-100 text-gray-800 rounded-sm text-xs'
          }
          onClick={() =>
            setFilterTabs({
              ...initFilterState,
              newCase: false,
              casesPerM: true,
            })
          }
        >
          Cases Per 1m
        </div>
      </div>

      <div className="mTable md:h-96 overflow-auto">
        <table className="w-full text-xs   bg-gray-100 text-center border-solid border border-light-blue-500">
          <tr className="border-solid border border-light-blue-500">
            <th>#</th>
            <th>Country</th>
            <th>Total Cases</th>
            <th>New Cases</th>
            <th>Recovered Cases</th>
            <th>Active Cases</th>
            <th>Critical Cases</th>
            <th>Death Cases</th>
            <th>Death / 1m Pop</th>
            <th>Cases / 1m Pop</th>
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
              <td>{val.deaths['1M_pop']}</td>
              <td>{val.cases['1M_pop']}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default WorldStatsComp
