{

    const createArrayWithGeneric=<T>(param:T):T[]=>
    {
         return [param]
    }

    type User={name:string ; id:number}

    const res1 = createArrayWithGeneric<boolean>(true)
    const res2 = createArrayWithGeneric<string>("Miraz")
    const res3 = createArrayWithGeneric<User> ({name:"Miraz",id:11})
    
    



    const createArrayWithGenericTuple=<T,Q>(param1:T, param2:Q):[T,Q]=>
    {
         return [param1,param2]
    }

    type User1={name:string ; id:number}

    const resT = createArrayWithGenericTuple<string,boolean>("Admin",true)
    // const res2 = createArrayWithGeneric<string>("Miraz")
    const resT3 = createArrayWithGenericTuple<User1,string> ({name:"Miraz",id:11},"Admin")



     type StudentInfo={
        name:string,
        roll: number,
        class: string
    }

    const addCourse=<StudentInfo>(student:StudentInfo)=>
    {
        const course ="MERN STACK development"

        return{
            ...student,
            course  
        }
    }

   


    const student1= addCourse({name:"Miraz",roll:12,class:"Class 10"})

    console.log(student1)

}