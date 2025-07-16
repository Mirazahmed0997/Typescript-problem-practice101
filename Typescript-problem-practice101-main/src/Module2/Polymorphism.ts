{


class Person{
    workingHour()
    {
        console.log(' ')
    }
}

class Student extends Person{
    workingHour(){
        console.log("4 Hours per day")
    }
}
class Developer extends Person{
    workingHour(){
        console.log("9 Hours per day")
    }
}

const getWorkingHour=(param:Person)=>
{
    param.workingHour()
}

const student=new Student();
// student.workingHour()

const developer= new Developer();
// developer.workingHour()

getWorkingHour(student)
getWorkingHour(developer)

// if a perticular method of a class is behave differently in another class is called polymorphism , 
// we can see above,  parents classes method returns different output in different class .



}