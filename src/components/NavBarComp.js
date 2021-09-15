import {Link} from "react-router-dom"

const NavBarComp = () => {
    return (
        <div className="w-full px-2 md:px-10  h-10 flex items-center bg-gray-900">
            <Link to="/">
            <h1 className="text-lg font-medium">Covid Status</h1>
            </Link>
        </div>
    )
}

export default NavBarComp
