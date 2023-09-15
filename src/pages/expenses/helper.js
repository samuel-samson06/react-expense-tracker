const test=[
    {itemName:"Coffee",price:10,date:"9-10-2023",description:"I bought a coffee",category:"beverage"},
    {itemName:"Food",price:10,date:"10-10-2023",description:"I bought a food",category:"food"},
    {itemName:"Shirt",price:10,date:"12-10-2023",description:"I bought a shirt",category:"beverage"},
    {itemName:"Cash",price:10,date:"15-10-2023",description:"I got paid bt Jonas",category:"cash"},
    {itemName:"Salary",price:40,date:"19-10-2023",description:"I got paid in my workplace",category:"cash"},
]
const balance=test.map(function(eachExpense){
    if(eachExpense.length===0){
        return null
    }else{
        return eachExpense.price
    }
}).reduce(function(eachPrice,curr){
    if(eachPrice+curr<=0){
        return ("NEGATIVE")
    }else{
        return eachPrice+curr
    }
},0)
console.log(balance);