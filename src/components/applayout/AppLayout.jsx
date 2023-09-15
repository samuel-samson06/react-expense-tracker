import { Outlet } from "react-router-dom"
import Navigation from "../navigation/Navigation"

function AppLayout() {
  return (
    <div className=" overflow-hidden sm:grid sm:grid-cols-[1fr,4fr] md:grid-cols-[1fr,9fr]">
      <div>
        <Navigation/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default AppLayout
