{

    //ts-node-dev --respawn --transpile-only .\module1\src\ConditionaTypes.ts


    // Conditional Types
    type A = string extends string ? true : false; // true
    type B = string extends number ? true : false; // false
    type C = string | number extends string ? true : false; // true
    type D = string & number extends string ? true : false; // false
    
    type Miraz={
        bike: string;
        car: string;
        ship: string;
    }

    type checkVehicle <T>= T extends keyof Miraz? true : false;
    
    type hasBike= checkVehicle<"bike">

}