import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

//Components
import HomeScreen from './screens/HomeScreen'
import FourOFourScreen from './screens/FourOFourScreen'
import NavBarComp from './components/NavBarComp'

export const globalStore = createContext()

function App() {
  const [worldStats, setWorldStats] = useState([])
  const [casesAcrossWorld, setcasesAcrossWorld] = useState("")

  
  const casesAcrossWorld_API = async () => {
    try {
      const url1 = `https://covid-193.p.rapidapi.com/statistics?country=all`

      const headers = {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': 'e1902605bemsh5a56404a91d3e1cp167b82jsn3309de1ecbf0',
      }
      const { data } = await axios.get(url1, { headers })
      //console.log(data.response[0])
      setcasesAcrossWorld(data.response[0])
    } catch (error) {
      console.log(error)
    }
  }

  const worldStats_API = async () => {
    try {
      const url2 = `https://covid-193.p.rapidapi.com/statistics`

      const headers = {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': 'e1902605bemsh5a56404a91d3e1cp167b82jsn3309de1ecbf0',
      }
      const { data } = await axios.get(url2, { headers })
      //console.log(data.response)
      setWorldStats(data.response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
   
    worldStats_API()
    casesAcrossWorld_API()
  }, [])

  return (
    <Router>
      <globalStore.Provider
        value={{ worldStats: worldStats, casesAcrossWorld: casesAcrossWorld }}
      >
        <div className="App w-full h-screen px-10 bg-gray-500">
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
