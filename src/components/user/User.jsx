import {BiUserCircle} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import {RiLockPasswordFill} from "react-icons/ri"
import { useContext } from "react"
import { TestContext } from "../../context/Context"

function User() {

    const {darkMode,loggedIn,setLoggedIn,inputFields,setInputFields}=useContext(TestContext)
    function handleClick(){
        if(inputFields.name.trim()==="" || inputFields.password.trim()===""){
            alert("Empty")
        }
        else{
            setLoggedIn(!loggedIn)
        }
    }
    function handleInputs(e){
        setInputFields(function(value){
            return {...value,[e.target.name]:e.target.value}
        })
    }
  return (
    <div className="py-5  sm:flex sm:flex-col sm:items-center">
        <div className={` flex flex-col text-5xl ${darkMode?"text-blue-500":"text-blue-700"} items-center justify-center`}>
            <BiUserCircle/>
        </div>
        <form onSubmit={(e)=>{e.preventDefault()}} className="mx-5 my-5 sm:border-2 sm:border-black sm:py-16 sm:px-16 sm:rounded-xl">
            <h1 className="font-semibold text-xl">Welcome!!!</h1>
            <div  className=" my-5 py-2 px-2 flex items-center gap-5  border-2 border-gray-300 rounded-md sm:w-96">
                <AiOutlineUser/>
                <label>
                    <input onChange={handleInputs}  value={inputFields.name} className="outline-none bg-white" name="name" type="text" placeholder="Enter Name"/>
                </label>
            </div>
            <div  className=" my-5 py-2 px-2 flex items-center gap-5 border-2 border-gray-300 rounded-md">
                <RiLockPasswordFill/>
                <label>
                    <input onChange={handleInputs}   value={inputFields.password} className="outline-none" name="password" type={"password"} placeholder="Enter Password"/>
                </label>
            </div>
            <button onClick={handleClick} className=" bg-blue-500 py-1 px-1 text-white rounded-md font-semibold w-20">Done</button>
        </form>
    </div>
  )
}

export default User
