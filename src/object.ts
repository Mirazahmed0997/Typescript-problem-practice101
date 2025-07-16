{{
// TypeScript object

const user :{
    readonly Company : string;
    firstName: string;
    middleName? : string | undefined; // optional type 
    lastName: string;
}
= {
    Company: "BD Calling IT", 
    firstName:"Miraz",
    lastName:"Ahmed"
}

// typeScript function

function add(num1 : number, num2 :number)
{
    return num1+num2
}

add(2,6)

// typeScript arrow function

const addArrow= (num1:number,num2:number): number=>num1+num2




// typeScript method


const user1={
    name:"Miraz",
    balance:0,
    addBalance(balance:number) : string // return type
    {
        return `My new balance is : ${this.balance + balance}`
    }

}

const arr:number[]=[1,23,32,12]

const newArr : number[]= arr.map((elem : number): number=> elem*elem)
}}