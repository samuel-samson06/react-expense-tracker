import React from 'react'
import { useContext, useState } from "react"
import { TestContext } from "../../context/Context"
import ExpenseListComponent from "./ExpenseListComponent";
import ExpenseForm from "./ExpenseForm";

function Expense() {
  const {changeCurrency,expenseList,balance} =useContext(TestContext);
  const [showForm,setShowForm]=useState(false)
  const{darkMode}=useContext(TestContext)
  function handleOpenExpenseForm(){
    setShowForm(!showForm)
  }
  function handleCloseExpenseForm(){
    setShowForm(!showForm)
  }
  return (
    <div className={`${darkMode?"bg-gray-700":"bg-white"} h-screen overflow-auto`}>
      {
        showForm?<ExpenseForm showForm={showForm} setShowForm={setShowForm} handleCloseExpenseForm={handleCloseExpenseForm}/>
        :<><div className="mx-5 ">
        <div className="flex justify-between items-center py-3">
          <h1 className={`${darkMode?"text-white":"text-black"} font-semibold mx-[-5px] sm:text-xl sm:my-4`}>All Expenses</h1>
          <p className={`${darkMode && "bg-gray-500"} bg-gray-700 px-2 sm:text-xl sm:py-2 sm:px-3  text-white py-1 px-1 rounded-md ${darkMode && "text-white"}`}>{changeCurrency}<strong>{balance.toLocaleString()}</strong></p>
        </div>
        <button onClick={handleOpenExpenseForm} className={`${darkMode?"bg-gray-500":"bg-gray-800"} text-white py-1 fixed left-[85%] bottom-14 px-3 text-xl font-semibold rounded-full`}>+</button>
        {expenseList.length===0?<p>No Expenses Recorded</p>:
          expenseList.map(function(eachList,index){
            return (
            <React.Fragment key={index}>
                <div className={` ${eachList.price<0?" border-r-8 border-red-400":"border-r-8 border-green-400"} ${darkMode?"bg-gray-300":"bg-gray-200"} my-2 py-1 px-1 rounded-lg`} key={index}>
                    <ExpenseListComponent key={index} itemName={eachList.itemName}
                    price={eachList.price.toLocaleString()} date={eachList.date} category={eachList.category} 
                    description={eachList.description}/>
                </div>
            </React.Fragment>)
        })
        }

    </div><br/><br/></>
      }
    </div>
  )
}

export default Expense