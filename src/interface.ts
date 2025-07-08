{

    // interface is same as type allias
 
    type User =  {
        name: string;
        age:number;
    }
    interface User1{
        name: string;
        age:number;
    }


    // intersection same as inheritence

    type userWithRole = User & {role: string };

    interface userWithRole1 extends User1{
        role:string
    }

    const user1: userWithRole={
        name:"Miraz",
        age: 28,
        role:"Frontend"
    }
    const user2: userWithRole1={
        name:"Ahmed",
        age: 25,
        role:"backend"
    }

    console.log(user1, user2)



    // array in interface

    interface Roll{
        [index : number] : number
    }

    const roolNumber : Roll=[1,2,3,4]

    type Add=(num1 : number,num2: number)=> number;

    interface Add1{
            (num1: number,num2:number):number
    }

    const add1: Add1=(num1,num2)=> num1+num2;

    add1(2,5)


}