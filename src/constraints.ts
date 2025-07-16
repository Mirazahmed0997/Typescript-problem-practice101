{


    
     type StudentInfo={
        name:string,
        roll: number,
        class: string
    }


    const addCourse=<T extends StudentInfo>(student: T)=>
    {
        const course ="MERN STACK development"

        return{
            ...student,
            course  
        }
    }

    const student1= addCourse({name:"Miraz",roll:12,class:"Class 10"})

    console.log(student1) 



    // generic constraint with key of operator

    type Owner= "Bike" | "car" | "ship" //instead of it we can use --->


    type vehicle={
        bike:string;
        car: string;
        ship:string
    }


     
     type Owner2 = keyof vehicle;

    //  const person1: Owner2= 

    const user={
        name:"miraz",
        id:123,
        address:"Dhaka"
    }
    const car={
        name:"Toyota",
        model:"T123",
    }

    const getPropertyValue=<X,Y extends keyof X>(obj: X, key: Y)=>{return obj[key]
 }   

    const result1= getPropertyValue(user, "address")
    const result2= getPropertyValue(car, "model")
    console.log(result1)
    console.log(result2)




}