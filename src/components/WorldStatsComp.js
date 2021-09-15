import { useContext, useState } from 'react'
import { globalStore } from '../App'

//components
import FilterTabsComp from './FilterTabsComp'
import TableComp from './TableComp'
//helpers
import { initFilterState } from '../helpers/initState'

const WorldStatsComp = () => {
  let { worldStats } = useContext(globalStore)
  const tabsData = JSON.parse(localStorage.getItem('filterTabs'))

  const [filterTab, setFilterTabs] = useState(
    tabsData ? tabsData : initFilterState
  )
  //saving state to localstorage
  localStorage.setItem('filterTabs', JSON.stringify(filterTab))

  //by default sort the list on the basis of new cases
  worldStats.forEach((element) => {
    if (element.cases.new === null) {
      element.cases.new = 0
    }
  })
  worldStats.sort((a, b) => parseInt(b.cases.new) - parseInt(a.cases.new))

  //filter handler function
  const filterTabHandler = () => {
    if (filterTab.Asia) {
      worldStats = worldStats.filter((val) => {
        return val.continent === 'Asia'
      })
    }

    if (filterTab.Africa) {
      worldStats = worldStats.filter((val) => {
        return val.continent === 'Africa'
      })
    }

    if (filterTab.NorthAmerica) {
      worldStats = worldStats.filter((val) => {
        return val.continent === 'North-America'
      })
    }

    if (filterTab.SouthAmerica) {
      worldStats = worldStats.filter((val) => {
        return val.continent === 'South-America'
      })
    }

    if (filterTab.Oceania) {
      worldStats = worldStats.filter((val) => {
        return val.continent === 'Oceania'
      })
    }

    if (filterTab.Europe) {
      worldStats = worldStats.filter((val) => {
        return val.continent === 'Europe'
      })
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
    <div className="w-full mt-6 px-2 md:px-10  flex flex-col justify-center  text-gray-800 my-4 ">
      <FilterTabsComp
        filterTab={filterTab}
        init={initFilterState}
        tabChange={(val) => setFilterTabs(val)}
      />
      <TableComp worldStats={worldStats}/>
    </div>
  )
}

export default WorldStatsComp
