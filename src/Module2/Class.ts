{


    // class Student {
    //     name:string;
    //     id: number;
    //     age: number;

    //     constructor(name:string,id:number,age:number)
    //     {
    //         this.name= name;
    //         this.id= id;
    //         this.age= age;
    //     }



    // peremeter properties


    class Student {
        constructor(public name:string,public id:number,public age:number)
        {}        
        displayData()
        {
            console.log(`Name: ${this.name}  ID: ${this.id}  Age: ${this.age}`)
        }

    }

    const stdnt1 = new Student("Miraz Ahmed", 17171,28)

    stdnt1.displayData()


}