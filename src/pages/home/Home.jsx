import React, { useContext } from "react"
import { TestContext } from "../../context/Context"
import {MdAccountBalance} from "react-icons/md"
import ExpenseListComponent from "../expenses/ExpenseListComponent"

function Home() {
    const {darkMode,changeCurrency,spent,total,balance,inputFields,expenseList}=useContext(TestContext)
    const date=new Date
    const currentMonth=(date.toLocaleDateString("en-US",{month:"short"}));
    const currentDate=(date.toLocaleDateString("en-US",{day:"numeric"}))
    const currentDay=(date.toLocaleDateString("en-US",{weekday:"long"}));
    return (
    <div className={`h-screen overflow-auto px-4 py-3 ${darkMode?"bg-gray-700":"bg-white"}`}>
        <header>
            <h1 className={`${darkMode&&"text-white"} sm:pb-3 sm:text-3xl font-semibold`}>Hi, {inputFields.name}</h1>
            <p className={`${darkMode?"text-white":"text-gray-500"} sm:text-xl sm:pb-3 font-medium  text-sm`}>Today {currentDay},{currentDate} {currentMonth}</p>
        </header>
        <div className={`${darkMode && "bg-purple-700"} md:mx-12 font-semibold text-3xl flex items-center justify-around bg-violet-500 py-5 sm:py-4  my-4 rounded-lg text-white`}>
            <main>
                <p className=" sm:text-lg text-sm">Balance</p>
                <h1>{changeCurrency}{balance.toLocaleString()}</h1>
            </main>
            <MdAccountBalance className="sm:text-5xl"/>
        </div>
        <main className={`md:mx-12 flex justify-evenly ${darkMode && "bg-gray-300"} bg-gray-200 py-2  rounded-lg`}>
            <aside className="sm:py-2">
                <p className={`${darkMode?"font-bold":"font-semibold"} font-semibold text-[12px] sm:text-lg sm:font-semibold`}>Total Transactions</p>
                <p className=" font-semibold text-center text-lg sm:text-2xl text-green-500">{changeCurrency}{total.toLocaleString()}</p>
            </aside>
            <aside className="sm:py-2">
                <p className={`${darkMode?"font-bold":"font-semibold"} font-semibold text-[12px] sm:text-lg sm:font-semibold`}>Total Expenses</p>
                <p className={`${darkMode && "text-red-700"} font-semibold text-center text-lg sm:text-2xl text-red-500`}>{changeCurrency}{spent.toLocaleString()}</p>
            </aside>
        </main>
        <div className=" my-5 sm:my-8 sm:mx-5">
            <h1 className={`${darkMode && "text-white"} mx-[8px] font-semibold sm:text-xl md:text-2xl`}>Recent Activities</h1>
            {expenseList.length===0?<p className="sm:text-lg">No Recent Activity</p>:
                expenseList.slice(0,5).map(function(eachList,index){
                    return (
                    <React.Fragment key={index}>
                        <div className={` ${eachList.price<0?" border-r-8 border-red-400":"border-r-8 border-green-400"} ${darkMode?"bg-gray-300":"bg-gray-200"} my-2 py-1 px-1 rounded-lg`}>
                            <ExpenseListComponent key={index} itemName={eachList.itemName}
                            price={eachList.price} date={eachList.date} category={eachList.category} 
                            description={eachList.description}/>
                        </div>
                    </React.Fragment>)
                })
            }
        </div><br/>
    </div>
  )
}

export default Home