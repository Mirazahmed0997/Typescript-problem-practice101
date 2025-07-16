{
    //mapped type
    const arrayOfNum: number[] = [1, 2, 3, 4, 5];

    const numbers = arrayOfNum.map((num) => num .toString());
    console.log(numbers);


    type Area= {
        height: number;
        width: number;
    }


    // by using this method we can convert all the properties of Area type to string

    type convertedAreaType<T>={
        [key in keyof T]: T[key]
    }

    const area1: convertedAreaType<{height:number,width:string}>={
        height: 10,
        width: "20"
    }




}