import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../../pages/home/Home"
import Report from "../../pages/report/Report"
import Expense from "../../pages/expenses/Expense"
import Settings from "../../pages/settings/Settings"
import AppLayout from "../applayout/AppLayout"

function ExpenseApp() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route index path="/" element={<Home/>}/>
                <Route path="/report" element={<Report/>}/>
                <Route path="/expense" element={<Expense/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Route>
            
            
        </Routes>
    </BrowserRouter>
  )
}

export default ExpenseApp
