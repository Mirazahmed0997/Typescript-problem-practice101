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






    // in gaurd 


    type NormalUser={
        name:string;
    }

    type AdminUser={
        name:string;
        role:"admin"
    }

    const getUser=(user : NormalUser| AdminUser)=>
    {
        if("role" in user)
        {
            console.log(`Admin: ${user.name}`)
        }
        else{
            console.log(`User:  ${user.name}`)
        }
    }

    const user1: NormalUser ={name: "Miraz Ahmed"}
    const user2: AdminUser ={name: "isty Partho",role:"admin"}

    getUser(user1)
    getUser(user2)

    // instance of guard


    class Parent{
        name:string;
        id:number;
        constructor(name:string,id:number)
        {
            this.name=name;
            this.id=id;
        }
    }

    class Student extends Parent{
       

        constructor(name:string,id:number)
        {
            super(name,id)
        }

        tutionHour(hour:number)
        {
            console.log(`name: ${this.name} Class Hour: ${hour}`)
        }

    }
    class Teacher extends Parent{
       

        constructor(name:string,id:number)
        {
            super(name,id)
        }

        tutionStudent(name:string)
        {
            console.log(`name: ${this.name} Advisor of : ${name}`)
        }

    }



    //  handle by another way
    const isStudent=(parentClass:Parent)=>
    {
        return parentClass instanceof Student
    }
    const isTeacher=(parentClass:Parent)=>
    {
        return parentClass instanceof Teacher
    }



    //function for instance of guard
    const getDetails=(parentClass:Parent)=>
    {
        if(isStudent(parentClass))
        {
            parentClass.tutionHour(4);
        }
        else if(isTeacher(parentClass)){
            parentClass.tutionStudent("Miraz");
        }
        else{
            console.log("Not an instance")
        }
    }








    const student1= new Student("Miraz",171014062)
    // student1.tutionHour(2)

    const teacher1= new Teacher("Isty",171012)
    // teacher1.tutionStudent("Miraz")

    getDetails(student1)
    getDetails(teacher1)

    
   

}