import { Link } from "react-router-dom"
import { BiHomeAlt2 } from "react-icons/bi"
import {GrMoney} from "react-icons/gr"
import {HiOutlineDocumentReport} from "react-icons/hi"
import {LuSettings} from "react-icons/lu"


function Navigation() {
  return (
    <div className="  sm:flex sm:flex-col sm:justify-around sm:text-4xl sm:bg-gray-300 sm:top-0 sm:w-[20%] md:w-[10%]  sm:py-5 flex fixed w-[100%] bottom-0 text-2xl items-center justify-evenly bg-gray-100 py-2">
      <Link className="sm:hover:bg-purple-700 sm:py-3 sm:px-2 sm:rounded-xl transition-all" to={"/"}>
        <BiHomeAlt2/>
      </Link>
      <Link className="sm:hover:bg-purple-700 sm:py-3 sm:px-2 sm:rounded-xl transition-all" to={"/expense"}>
        <GrMoney/>
      </Link>
      <Link className="sm:hover:bg-purple-700 sm:py-3 sm:px-2 sm:rounded-xl transition-all" to={"/report"}>
        <HiOutlineDocumentReport/>
      </Link>
      <Link className="sm:hover:bg-purple-700 sm:py-3 sm:px-2 sm:rounded-xl transition-all" to={"/settings"}>
        <LuSettings/>
      </Link>
    </div>
  )
}

export default Navigation
