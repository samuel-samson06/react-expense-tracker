import {MdOutlineEmojiTransportation} from "react-icons/md"
import {BsFillHouseCheckFill,BsTools,BsBookmarkStarFill} from "react-icons/bs"
import {GiPopcorn} from "react-icons/gi"
import {FaHospital} from "react-icons/fa"
import {IoFastFoodOutline} from "react-icons/io5"
import { useContext } from "react"
import { TestContext } from "../../context/Context"

function ExpenseListComponent({itemName,price,description,category,date}) {
  const{darkMode}=useContext(TestContext)
  let categoryIcon;
  if(category==="Food"){
    categoryIcon=<IoFastFoodOutline/>
  }else if(category==="Transportation"){
    categoryIcon=<MdOutlineEmojiTransportation/>
  }else if(category==="Housing"){
      categoryIcon=<BsFillHouseCheckFill/>
  }else if(category==="Utilities"){
      categoryIcon=<BsTools/>
  }else if(category==="Entertainment"){
      categoryIcon=<GiPopcorn/>
  }else if(category==="Healthcare"){
      categoryIcon=<FaHospital/>
  }else{
      categoryIcon=<BsBookmarkStarFill/>
  }

  return (
    <>
      <p className=" text-sm px-2">{date}</p>
      <div className="grid sm:grid-cols-[2fr,4fr,2fr] grid-cols-[1.3fr,4fr,1fr] justify-evenly py-1 px-1 items-center gap-3">
        <div>
          <p className={`${darkMode && "bg-gray-200"} text-2xl rounded-xl text-purple-900 bg-white w-fit py-2 px-1`}>{categoryIcon}</p>
        </div>
        <div >
          <p className="sm:text-xl sm:font-normal font-semibold">{itemName}</p>
          <p className=" sm:font-semibold text-sm font-light text-slate-950">{description}</p>
        </div>
        <div>
          <p className={`sm:text-lg font-semibold ${price<0?"text-red-500":"text-green-500"}`}>{price}</p>
        </div>
      </div>
    </>
  )
}

export default ExpenseListComponent