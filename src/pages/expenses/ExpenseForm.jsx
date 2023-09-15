import {  useContext, useEffect, useState } from "react";
import Buttons from "./Buttons";
import React from "react";
import { TestContext } from "../../context/Context";
// import ExpenseError from "./ExpenseError";

function ExpenseForm({handleCloseExpenseForm,setShowForm,showForm}) {
//importing the props with UseContext
    const {darkMode,setSpent,setTotal,balance,setBalance,expenseList,setExpenseList}=useContext(TestContext)
// The Balance Checker was used last minute. It was and is being used to check the current balance at every rerender of the form page 
// BalanceChecker was a trick logic it dosent do anythin except keep track of thr balance from the useContext    
    let balanceChecker=balance
//  The Section Below was used for the buttons that is why they are called array of numbers cause they are an actual array of numbers i also created a component to show this numbers 
    const arrayOfNumbers=["1","2","3","4","5","6","7","8","9"];
// This Place was used for inputting the number on the site i didnt want to use an input box and the only logic i could come up with was creating an array then appending any button click into the array then i used a javascript array function .join() to make it have a regular number look
    const [appendedNumbers,setAppendedNumbers]=useState([]);   
//This is used to change the border color of the input field if they are no filled 
    const [isRequired,setIsRequired]=useState(false) 
//This is another trick logic it i plain and dosent really have a function also except used to replace the arrat if the array is empty
//so rather than showing an empty array i just display currentValue
    const [currentNumberValue,setCurrentNumberValue]=useState("0")
//Ths was what is used to manage the inputs
    const [inputsEntered,setInputsEntered]=useState({
        category:"Miscellaneous",transaction:"Withdrawl",
        itemName:"",description:"",date:""
    })
    useEffect(function(){
        const timer =setTimeout(function(){
           return setIsRequired(false)
        },5000)

        return ()=>{
            clearTimeout(timer)
        }
    },[isRequired])
    function handleFormSubmit(e){
        e.preventDefault()
    } 
    //This button is used to delete entered values in the amount parameter
    function handleDelete(){
        if(appendedNumbers.length===0){
            console.log("0");
        }else{
            appendedNumbers.pop()
            setCurrentNumberValue(appendedNumbers.join(""));
            if(appendedNumbers.join()===""){
                setCurrentNumberValue("0")
            } 
        }
    }
    function handleAddZero(){
        if(appendedNumbers.length===0){
            null
        }
        else{
        setAppendedNumbers(function(numbers){
            return [...numbers,"0"]
        })}
    }
    //Used to work and input all the input values so that they work properly
    function handleInputs(e){
        setInputsEntered(function(inputs){
            return {...inputs,[e.target.name]:e.target.value}
        })
    }
//This is the Most Complicated part of the app
//CONDITIONAL!! saved my ass here no cap
    function handleDone(){
        //This place is used to create a new expense
        const createdExpense={
            itemName:inputsEntered.itemName,
            description:inputsEntered.description,
            date:inputsEntered.date,
            category:inputsEntered.category,
            price:inputsEntered.transaction==="Withdrawl"?(-appendedNumbers.join("")):+appendedNumbers.join("")
        }
        //here is used to check if the inputs values are empty 
        if(appendedNumbers.length===0 || inputsEntered.itemName.trim()==="" || inputsEntered.date==="" || inputsEntered.description.trim()===""){
            setIsRequired(true)
            alert("Please Enter All fields")
        }
        else if(expenseList.length===0 && inputsEntered.transaction==="Withdrawl" ){
            alert("Your Account is Currently Empty please make a deposit")
            //This else if block is used to check if the array of expenses is empty and also used to check if the input is on withdrawl to avoid complications
        }else{
            //After all the other conditionals are fulfilled we finally come here the main logic
            //1st block checkes if its on deposit then does what it does in the block its understandable    
            if(inputsEntered.transaction==="Deposit") {
                setBalance(function(currBalance){
                    return currBalance+Number(appendedNumbers.join(""))
                })
                setExpenseList(function(eachList){
                    return [createdExpense,...eachList]
                })
                setInputsEntered({
                    category:"Miscellaneous",transaction:"Deposit",
                    itemName:"",description:"",date:""
                })
                setAppendedNumbers([])
                setShowForm(!showForm)
                setTotal(function(total){
                    return total+Number(appendedNumbers.join(""))
                })
            }      
            else{
                //2nd block another set of conditions its quiet explainable by reading it
                if(inputsEntered.transaction==="Withdrawl" && balanceChecker<=0){
                    alert("Please Deposit money")
                
                }else if(inputsEntered.transaction==="Withdrawl" && Number(appendedNumbers.join(""))>balanceChecker){
                    alert("Insufficient Balance")
                }else{
                    setBalance(function(currBalance){
                        return currBalance-Number(appendedNumbers.join(""))
                    })
                    setExpenseList(function(eachList){
                        return [createdExpense,...eachList]
                    })
                    setInputsEntered({
                        category:"Miscellaneous",transaction:"Deposit",
                        itemName:"",description:"",date:""
                    })
                    setAppendedNumbers([])
                    setShowForm(!showForm)
                    setTotal(function(total){
                        return total+Number(appendedNumbers.join(""))
                    })
                    setSpent(function(spent){
                        return spent+Number(appendedNumbers.join(""))
                    })
                }
            }
        }
    }
  return (
    <>
        <form onSubmit={handleFormSubmit} className="mx-3">
            <div className="grid grid-cols-[1fr,3fr] font-semibold text-lg my-1">
                <button onClick={handleCloseExpenseForm} className={`${darkMode?"text-white":"text-black"} font-semibold`}>←</button>
                <p className={`${darkMode?"text-white":"text-black"}`}>Add Amount</p>
            </div>
            <div className={isRequired&&appendedNumbers.length<=0?`my-2 border-b-2 border-red-500  `:` my-2 border-b-2 border-black  `}>
                <p className={`${darkMode?"text-white":"text-black"} my-1 text-gray-400 text-sm`}>Amount</p>
                <p className={`${darkMode?"text-white":"text-black"} my-2 font-semibold text-3xl flex items-center overflow-x-auto`}><span className=" text-lg">₦</span>&nbsp;{appendedNumbers.length===0?currentNumberValue:appendedNumbers.join("")}</p>
            </div>
            <div>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <p className=" my-2  text-gray-400 text-sm sm:font-semibold sm:text-base">Expenses made for</p>
                        <select onChange={handleInputs}   className="sm:w-60 md:py-2 md:px-3 sm:py-2 sm:px-2 py-1 px-1 rounded-md  outline-none bg-slate-200 font-semibold text-lg" name="category" id="">
                            <option value="Miscellaneous">Miscellaneous</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Housing">Housing</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Food">Food</option>
                        </select>
                    </div>
                    <div>
                        <p className=" my-2 text-gray-400 text-sm sm:font-semibold sm:text-base">Transactions</p>
                        <select onChange={handleInputs}  className="md:py-2 sm:w-60 md:px-3 sm:py-2 sm:px-2 py-1 px-1 rounded-md  outline-none bg-slate-200 font-semibold text-lg" name="transaction" id="">
                            <option value="Withdrawl">Withdrawl</option>
                            <option value="Deposit">Deposit</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:my-3 items-center my-1 gap-2">
                    <div>
                        <p className=" my-2 text-gray-400 text-sm sm:font-semibold sm:text-base">Expenses</p>
                        <input required onChange={handleInputs} type="text" name="itemName" className={` outline-none border-2 ${isRequired && inputsEntered.itemName.length<=0?"border-red-500":"border-black"} sm:w-60 sm:py-1 sm:px-2  rounded-lg px-1 py-1 w-32 `}  placeholder="Expense name"/>
                    </div>
                    <div>
                        <p className=" my-2 text-gray-400 text-sm sm:font-semibold sm:text-base">Date of Expense</p>
                        <input required onChange={handleInputs} name="date" className={`outline-none ${isRequired && inputsEntered.date.length<=0?"border-red-500":"border-black"} sm:py-1 sm:px-2 sm:w-60  border-2 rounded-md w-32 px-1 py-1`} type="date"/>
                    </div>
                </div>

                <p className="sm:mt-4  my-2 text-gray-400 text-sm sm:font-semibold sm:text-base">Description</p>
                <textarea required onChange={handleInputs}  name="description" cols="30" className={` py-1 bg-slate-200 sm:w-[40%] sm:h-28 outline-none border-2 border-black rounded-lg ${isRequired && inputsEntered.description.length<=0?"border-red-500":"border-black"}`} rows="2"></textarea>
            </div>
            <div className="grid grid-cols-3 items-center font-semibold text-lg sm:text-xl ">
                {arrayOfNumbers.map(function(eachNumber,index){
                    return (
                    <React.Fragment key={index}>
                        <div key={index} className="bg-gray-200 my-2 mx-2 rounded-lg ">
                            <Buttons setAppendedNumbers={setAppendedNumbers} key={index} eachNumber={eachNumber}/>
                        </div>
                    </React.Fragment>
                    )
                })}
                <div className=" grid grid-cols-3 col-span-3">
                    <button className={`${darkMode?"text-white":"text-black"}`} onClick={handleDelete}>X</button>
                    <button className="bg-gray-200 my-1 mx-1 rounded-lg sm:text-xl"  onClick={handleAddZero}>0</button>
                    <button className={`${darkMode?"text-white":"text-black"}`} onClick={handleDone}>Ok</button>
                </div>
            </div><br/><br/>
        </form>
    </>
  )
}
export default ExpenseForm