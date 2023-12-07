
export function getSemester():string | undefined{
    
    const date = new Date()

    const September = 8
    const Febuary = 1

    const March = 2
    const October = 9

    const currentMonth = date.getMonth()


    if(  currentMonth >= September || currentMonth <= Febuary ) return "sem1"
    if(  currentMonth >= March || currentMonth <= October  )  return "sem2"

   

}