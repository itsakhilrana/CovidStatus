import axios from 'axios'

export const stats_API = async (setWorldStats, setcasesAcrossWorld) => {
  try {
    const url = `https://covid-193.p.rapidapi.com/statistics`

    const headers = {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': 'e1902605bemsh5a56404a91d3e1cp167b82jsn3309de1ecbf0',
    }
    const { data } = await axios.get(url, { headers })

    let casesAcrossWorld_Arr = data.response.filter((val) => {
      return val.country === 'All'
    })

    setcasesAcrossWorld(casesAcrossWorld_Arr[0])

    let worldStats_Arr = data.response.filter((val) => {
      return val.country !== 'All' && val.country !== 'Asia'
    })

    worldStats_Arr = worldStats_Arr.filter((val) => {
      return val.country !== 'Europe' && val.country !== 'Africa'
    })

    worldStats_Arr = worldStats_Arr.filter((val) => {
      return val.country !== 'North-America' && val.country !== 'South-America'
    })

    worldStats_Arr = worldStats_Arr.filter((val) => {
      return val.country !== 'Oceania' && val.country !== 'Africa'
    })

    setWorldStats(worldStats_Arr)
  } catch (error) {
    console.log(error)
  }
}
