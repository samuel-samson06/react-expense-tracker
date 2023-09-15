function ExpenseError({children}) {
  return (
    <div className={` fixed bg-red-400  right-10 py-2 px-2 rounded-lg font-semibold w-[80%] flex items-center`}>
        {children}
    </div>
  )
}

export default ExpenseError