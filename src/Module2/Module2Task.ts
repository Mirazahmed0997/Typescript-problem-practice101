{

    // problem1
    const formatString=(input: string, toUpper?: boolean)=>{
        if(toUpper ==true || toUpper==null)
        {
            return input.toUpperCase();
        }
        else if(toUpper==false)
        {
            return input.toLowerCase();
        }
        else{
            return input.toLowerCase();
        }
    }

    const name=formatString("Miraz",false)

    console.log(name)



}