
import ExpenseApp from "./components/ExpenseApp/ExpenseApp"
import useLocalStorage from "use-local-storage"
import User from "./components/user/User"
import {TestContext} from "./context/Context"

function App() {
  const [balance,setBalance]=useLocalStorage("balance",0);
  const [changeCurrency,setChangeCurrency]=useLocalStorage("currency","₦")
  const [total,setTotal]=useLocalStorage("total",0);
  const [spent,setSpent]=useLocalStorage("spent",0);
  const [darkMode,setDarkMode]=useLocalStorage("dark-mode",false)
  const [expenseList,setExpenseList]=useLocalStorage("expenseList",[])
  const [loggedIn,setLoggedIn]=useLocalStorage("loggedIn",false)
  const [inputFields,setInputFields]=useLocalStorage("inputFields",{
    name:"",password:""
  })
//alert(darkMode)
  
  const values={darkMode,setDarkMode,changeCurrency,setChangeCurrency,spent,setSpent,total,setTotal,balance,setBalance,expenseList,setExpenseList,loggedIn,setLoggedIn,inputFields,setInputFields}

  return (
    <TestContext.Provider value={values}>
      {loggedIn?<ExpenseApp/>:<User/>}
    </TestContext.Provider>
  )
}

export default App
