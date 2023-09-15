import { useContext } from "react"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement } from "chart.js";
import { TestContext } from "../../context/Context"
import { Colors } from 'chart.js';
ChartJS.register(Colors);
ChartJS.register(ArcElement);


function Charts() {

    const{total,balance,spent}=useContext(TestContext)
    const percentAgeSpent=(spent/(Math.abs(spent)+balance))*100
    const percentAgeBalance=(balance/(Math.abs(spent)+balance))*100
    const data={
        labels:["Red","Green"],
        datasets:[{
            data:[percentAgeBalance,percentAgeSpent],
            backgroundColour:["red","blue"],
        }]
    }
    
    return (
    <div className={`"bg-gray-500  overflow-y-hidden text-center flex flex-col items-center gap-5"`}>
        <h1>Statistics</h1>
        {total===0 && spent===0?
        <p>No Statiscal spending Report</p>:
        <>
            <aside className="flex sm:text-lg gap-8 text-sm">
                <p className=" text-red-400">Spent</p>
                <p className=" text-blue-400">Balance</p>
            </aside>
            <div className={` sm:w-84 text-center`}>
                <Doughnut data={data} />
            </div>
        </>}
    </div>
  )
}

export default Charts



