 const kgToGm= (value: string | number)=>
 {
    if(typeof value == "string")
    {
        const convValue= parseFloat(value)*1000;
        return ` Converted Value is : ${convValue}`
    }

    else if(typeof value =="number")
    {
        const convValue= value*1000;
         console.log(convValue)
        return value;
    }
 }


 const result1=kgToGm(100) as number
 const result2=kgToGm("1000") as string

 console.log(result1) 
 console.log(result2)