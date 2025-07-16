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



const student=new Student();
student.workingHour()

const developer= new Developer();
developer.workingHour()



}