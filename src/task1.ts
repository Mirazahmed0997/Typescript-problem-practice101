import { describe } from "node:test";
import { userInfo } from "os";

// ts-node-dev --respawn src/index.ts
{



    // task 1
    const taskMessage: string="Hello , I've completed this module";
    console.log(taskMessage)

    // task 2 function

    type Info={name:string ; age?:number; role:"admin" | "Info" | "guest"}

    
    const CreatUser=<User>(user:User)=>
    {
        return {...user}
    }

    const user1 = CreatUser({name:"Miraz",age:28,role:"admin"})
    const user2 = CreatUser({name:"Ahmed",role:"user"})

    console.log(user1, user2);

    // task 3 type allias

    type UserType={
        name: string;
        address: string;
        HairColor:string;
        eyeColor:string;
        hobbies:string;
        familyMembers:number;
        job:string;
        skills:string;
        metarial:string;
        friends:string;
    }

    const user101: UserType = {
        name: "Miraz",
        address: "123 Main St",
        HairColor: "Black",
        eyeColor: "Brown",
        hobbies: "Reading, Traveling",
        familyMembers: 4,
        job: "Software Engineer",
        skills: "JavaScript, TypeScript",
        metarial: "Bachelor's Degree",
        friends: "Ahmed, Sarah"
    }

    console.log(user101);


    // task 4 union and intersection

    type firstName= {
        first: string;
    }

    type lastName = {
        last: string;
    }
    type fullName = firstName | lastName;

    const person: fullName = {
        first: "Miraz"
    }

    console.log(person);

    type personDetails = {
        name: string;
        skills: string[];
        position1: string;
    }

    type personDetails2 = {
        name: string;
        skills: string[];
        position2: string;
    }

    type personDetails3 = personDetails & personDetails2;
    const personInfo: personDetails3 = {
        name: "Miraz",
        skills: ["JavaScript", "TypeScript"],
        position1: "Software Engineer",
        position2: "Team Co- Lead"
    }

    console.log(personInfo);



    // task 5

   const ReverseString = <T extends string>(param: T): string => {
    const reversed = param.split('').reverse().join('');
    return reversed;
}

const reversedString = ReverseString<string>("Hello Miraz");
console.log(reversedString);


// task 6

const sum = (...numbers: number[]) => {
    return numbers.reduce((total, number) =>total+number);
};
//  return numbers.reduce((total, num) => total + num, 0);

// task 7

 const assertionType= (value: string | number)=>
 {
    if(typeof value == "string")
    {
        
        return value.length
    }

    else if(typeof value =="number")
    {
       
        return value*value;
    }
 }


 const result1= assertionType(100) 
 const result2= assertionType("1000")

 console.log(result1) 
 console.log(result2)



//  task 8


type UserInfo={
    name:string;
    email:string;
}

type Admin={
    adminLevel:string;
}

type AdminUser= UserInfo &  Admin

function describeAdmin(user: AdminUser): string {
  return `Admin ${user.name} (${user.email}) has admin level ${user.adminLevel}.`;
}


const admin101 : AdminUser= {
        name:"Miraz",
        email:"ahmedmiraz87@gmail.com",
        adminLevel:"3"
}

console.log(describeAdmin(admin101))






// task 9




type Employee = {
  address?: {
    city?: string;
  };
};

function getEmployeeCity(employee: Employee): string | undefined {
  return employee?.address?.city;
}


const emp1: Employee = {
  address: {
    city: "Los Angeles"
  }
};

const emp2: Employee = {};

console.log(getEmployeeCity(emp1)); // "Los Angeles"
console.log(getEmployeeCity(emp2)); // undefined


// task 10

const getDisplayName=(name:string| null| undefined)=>
{
    if(typeof name=="string")
    {
        console.log(name)
    }
 
    else
    {
        console.log("Anonymous")
    }
}


getDisplayName("Miraz Ahmed")
getDisplayName(undefined)
getDisplayName(null)

// task 11

const processData=(data:unknown)=>
{
    if(typeof data=="string")
    {
      return  data
    }
    else if(typeof data=="number")
    {
        return data*data
    }
}

const data1 =processData("Miraz")
const data2 =processData(1000)

console.log(data1)
console.log(data2)


// task 13

const removeDuplicateArray=<T>(param:T[])=>
    {
        let checkedArray: T[] = [];
       for (let i = 0; i < param.length; i++) 
        {

        if (!checkedArray.includes(param[i])) 

        {
            checkedArray.push(param[i]);
        }

       
    }

     return checkedArray
        
    }

    const array=removeDuplicateArray([11,2,3,4,2,4,5])
    console.log(array)

    // task 14

    const userDetails=[
    {
        name:"miraz",age:28
    },
    {
        name:"ahmed",age:30
    }
]

const singleDetails= userDetails.map((detail)=>{
   console.log(`name: ${detail.name} age:${detail.age}`)
})

// task 15

const isString=(value:unknown)=>
{
    if(typeof value=="string")
    {
        return value.toUpperCase()
    }
}


const upperCase=isString("isty")
console.log(upperCase)


// task 16

// function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }
const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};





const  getPropertyBykey = <T ,K extends keyof T>(obj: T, key:K):T[K]=>
{
    return obj[key];
}

const name = getPropertyBykey(user, "name"); // Type: string
const age = getPropertyBykey(user, "age");   // Type: number

console.log(name, age)




}
