
{

    type Todo={
        id: number;
        userId:number;
        title:string;
        completed:boolean
    }


    const getTodo= async() : Promise<Todo> =>
    {
        const result= await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await  result.json();
        console.log(data)
        return data
    }

    getTodo();


    type DataType= boolean;

    const createPromise=(): Promise<DataType>=>
    {
        return new Promise<DataType>((resolve,reject)=>
        {
            const data : DataType = true
            if(data)
            {
                resolve(data)
            }
            else{
                reject("Failed to load data")
            }
        })
    }


    const showData = async() : Promise<DataType> =>
    {
        const data : DataType=await createPromise();
        console.log(data)
        return data
    }

    showData();


}