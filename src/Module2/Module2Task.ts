import { title } from "process";

{

    // problem1
    const formatString=(input: string, toUpper?: boolean) : string=>{
        if(toUpper ==true || toUpper==null)
        {
            return input.toUpperCase();
        }
        else if(toUpper==false)
        {
            return input.toLowerCase();
        }
        else{
            return input.toLowerCase();
        }
    }

    const name=formatString("Miraz")
    const name1=formatString("Ahmed",false)
    const name2=formatString("Miraz",true)

    console.log(name)
    console.log(name1)
    console.log(name2)



    // Problem 2

    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{

      const filterItems= items.filter(item=>{
        if(item.rating >=4)
        {
            
           return item.title
        }
       })
       return filterItems
    }


    const books = [
 
        { title: "Book A", rating: 4.5 },
  
        { title: "Book B", rating: 3.2 },
 
        { title: "Book C", rating: 5.0 }
                  
    ];



    const topRatedBooks=filterByRating(books)


    console.log(topRatedBooks)


    // Problem 3

    function concatenateArrays<T>(...arrays: T[][]): T[]{
        
       const individualArray=arrays.reduce((acc, curr) => acc.concat(curr))

    //    by using reduce method arrays were separeted individually and by concat method all arrays are concated as one array

       console.log(individualArray)
       return  arrays.reduce((acc, curr) => acc);
    }

    concatenateArrays(["a", "b"], ["c"]);       
    concatenateArrays([1, 2], [3, 4], [5]);


//    Problem 4

    class Vehicle {

    private make: string;
            year: number;

        constructor(make:string,year:number)
        {
            this.make=make;
            this.year=year;
        }
        
        getInfo()
        {
            return console.log(`Make: ${this.make}, Year: ${this.year}`)
            
        }
  
}

    class Car extends Vehicle{
        private model:string;

        constructor(make:string,year:number,model:string)
        {
            super(make,year)
            this.model=model;
        }

        getModel()
        {
            return console.log(`Model: ${this.model}`)
        }
    }

    const car1= new Car("Toyota", 2020, "Corolla");
    car1.getInfo()
    car1.getModel()


    // problem 5

    const processValue=(value: string | number): number=>{
        if(typeof value=="string")
        {
            return value.length;
        }
        else{
            return value*2
        }
    }

    const value1=processValue("hello");
    const value2=processValue(10);

     
    console.log(value1,value2)


    // problem 6

    interface Product {
  name: string;
  price: number;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (!products || products.length === 0) {
    return null;
  }

  const maxValue = products.reduce((maxProduct, currentProduct) =>
    currentProduct.price > maxProduct.price ? currentProduct : maxProduct
  );

  console.log(maxValue);
  return maxValue;
}


const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];
const products1:Product[] =[];


getMostExpensiveProduct(products);  
getMostExpensiveProduct(products1);  


// Problem 7


}