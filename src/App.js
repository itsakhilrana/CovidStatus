import { useState, useEffect, createContext } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

//Components
import HomeScreen from './screens/HomeScreen'
import FourOFourScreen from './screens/FourOFourScreen'
import NavBarComp from './components/NavBarComp'

//API
import { stats_API } from './api/statsApi'

export const globalStore = createContext()

function App() {
  const [worldStats, setWorldStats] = useState([])
  const [casesAcrossWorld, setcasesAcrossWorld] = useState('')

  useEffect(() => {
    stats_API(setWorldStats, setcasesAcrossWorld)
  }, [])

  return (
    <Router>
      <globalStore.Provider
        value={{ worldStats: worldStats, casesAcrossWorld: casesAcrossWorld }}
      >
        <div className="App w-screen pb-10 md:w-full h-full md:h-screen bg-gray-300">
          <NavBarComp />
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route component={FourOFourScreen} />
          </Switch>
        </div>
      </globalStore.Provider>
    </Router>
  )
}

export default App
