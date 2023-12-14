

export function getNewCredits(currentCredit:number | null,creditValueArr:number[]){

    const initialValue = 0
    const updatedCredits = creditValueArr.reduce( (acc,cv) => acc + cv , initialValue )
    let creditNotNull:number;

    currentCredit ? creditNotNull = currentCredit : creditNotNull = 0
    const totalCredits = updatedCredits + creditNotNull

    return totalCredits
}