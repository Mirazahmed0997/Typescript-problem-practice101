{
    const add=(param1:string|number,param2:string|number): string|number=>
    {
        if(typeof param1==="number" && typeof param2==="number")
        {
            return param1+param2;
        }
        else{
            return param1.toString()+param2.toString();
        }
    }

    const sum1=add(5,7)
    const sum2=add("5",7)
    console.log(sum1,sum2)
}