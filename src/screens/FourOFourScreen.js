import { Link } from 'react-router-dom'

const FourOFourScreen = () => {
  return (
    <div className="h-screen flex flex-col text-gray-800 justify-center items-center">
      <h1>Opps, seems like you are lost?</h1>
      <div>
        <Link
          to="/"
          className="text-gray-800 font-bold"
        >
          Mind going back Home!
        </Link>
      </div>
    </div>
  )
}

export default FourOFourScreen
