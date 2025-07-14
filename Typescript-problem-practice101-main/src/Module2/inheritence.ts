{

    // OOP inheritence


    class ParentClass{   
        name: string;
        id:number;
        address: string;
    

    constructor(name:string,id:number,address:string)
    {
        this.name= name;
        this.id=id;
        this.address=address;
    }

    workingHours(numbOfhour: number)
    {
        console.log(`name : ${this.name} ID: ${this.id} Working Hours : ${numbOfhour}`)
    }

    }


    // Employee class


    class Employee extends ParentClass{
       

    constructor(name:string,id:number,address:string)
    {
      super(name,id,address)
    }

    }


    
    // management class


    class Management extends ParentClass{

        designation:string


    constructor(name:string,id:number,address:string, designation:string)
    {
        super(name,id,address)
        this.designation=designation
    }
   

    asignedPerson(name:string)
    {
        console.log(`${this.name} assigned with ${name}`)
    }

    }




    const emp1= new Employee("Miraz Ahmed", 17217,"Dhaka - Bangladesh");
    const management1= new Management ("Isty Partho", 171014,"Dhaka-Bangladesh","CEO")
    
    emp1.workingHours(8)
    management1.asignedPerson("Miraz")
}
