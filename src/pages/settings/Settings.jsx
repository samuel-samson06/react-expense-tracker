import { useContext } from "react"
import { TestContext } from "../../context/Context"

function Settings() {
  const {inputFields,darkMode,setDarkMode,changeCurrency,setChangeCurrency}=useContext(TestContext)
  function handleChangeCurrency(e){
    setChangeCurrency(e.target.value)
  }
  function handleDarkMode(){
    setDarkMode(!darkMode)
  }
  return (
    
    <div className={`${darkMode?" bg-slate-800":"bg-gray-200"} py-10 sm:relative  absolute sm:h-screen w-[100%] h-[92%]`}>
      <div className="text-center py-3">
        <h className={`${darkMode?"text-white":"text-black"} font-semibold sm:text-3xl`}>Welcome {inputFields.name}</h>
      </div>
      <main className=" text-lg font-semibold sm:px-32 md:px-44 flex flex-col gap-3 justify-center ">    
        <div className=" bg-gray-300 flex min-[320px]:justify-evenly mx-3 my-2 py-2 sm:justify-between sm:px-10 md:justify-between md:px-8 rounded-lg ">
          <h1>Dark Mode</h1>
          <div onClick={handleDarkMode} className={`  w-14 rounded-2xl transition-all py-0.5 px-0.5 ${darkMode?" bg-green-500":"bg-gray-400"}`}>
            <div className={` bg-white w-7  text-transparent rounded-full ${darkMode&&"addTransition"}`}>
              .
            </div>
          </div>
        </div>
        {/* CHANGE CURRENCY */}
        <div className="flex min-[320px]:justify-evenly bg-gray-300 mx-3 my-2 py-2 sm:justify-between sm:px-10 md:justify-between md:px-8 rounded-lg">
          <p>Change Currency Type</p>
          <select className=" w-10 outline-none border-2 border-black rounded-md "  value={changeCurrency} onChange={handleChangeCurrency} name="" >
              <option value="₦">₦</option>
              <option value="$">$</option>
              <option value="₤">₤</option>
              <option value="€">€</option>
              <option value="¥">¥</option>
              <option value="£">£</option>
          </select>
        </div>
        <div className="flex min-[320px]:justify-evenly bg-gray-300 mx-3 my-2 py-2 sm:justify-between sm:px-10 md:justify-between md:px-8 rounded-lg ">
          <p>Change Language</p>
          <select className=" w-20 outline-none border-2 border-black rounded-md " name="" >
              <option value="$">English</option>
              {/* <option value="₦">Default(English)</option> */}
          </select>
        </div>
        {/* DARK MODE TOGGLE */}

      </main>
    </div>
  )
}

export default Settings
