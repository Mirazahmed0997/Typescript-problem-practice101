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
    
 







}