{
    // abstraction : 1.interface, 2.abstract

    // function declaration
    interface Vehicle1{
       startEngine(): void;
       stopEngine():void;
       move():void
    }



    // function implementation

    class Car1 implements Vehicle1{
        startEngine(): void {
            console.log('Start the car')
        }
        stopEngine(): void {
            console.log("stop the car")
        }

        move(): void {
            console.log("Car is Running")
        }
        test(): void {
            console.log("Test Car")
        }
    }

    const toyotaCar= new Car1()
    toyotaCar.startEngine()
    toyotaCar.stopEngine()
    toyotaCar.move()

 
    // create abstraction by using abstract class

    abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    test(): void {
        console.log("Test Car");
    }
}

class Bike extends Car2 {
    startEngine(): void {
        console.log("Start the bike");
    }

    stopEngine(): void {
        console.log("Stop the bike");
    }

    move(): void {
        console.log("Bike is moving");
    }
}

// Example usage:
const myBike = new Bike();
myBike.startEngine();  // Output: Start the bike
myBike.move();         // Output: Bike is moving
myBike.stopEngine();   // Output: Stop the bike
myBike.test();         // Output: Test Car

    
    


}
