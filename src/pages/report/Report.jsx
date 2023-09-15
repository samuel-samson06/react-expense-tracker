import { useContext, useState } from "react"
import { TestContext } from "../../context/Context"
import Charts from "./Charts"

function Report() {
  // const {expenseList}=useContext(TestContext)
  
  // const [data,setData]=useState({
  // })
  return (
    <div className="text-center font-semibold text-xl py-3">
        {/* <p>Reports Statistics coming soon...</p> */}
        <Charts/>
    </div>
  )
}

export default Report
