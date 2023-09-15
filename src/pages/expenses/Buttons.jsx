function Buttons({eachNumber,setAppendedNumbers}) {
    function handleButton(){
        setAppendedNumbers(function(number){
            return [...number,eachNumber]
        })
    }
  return (
    <div onClick={handleButton} className="flex flex-col items-center">{eachNumber}</div>
  )
}

export default Buttons