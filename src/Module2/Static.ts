{
     

    class Counter{
        static count: number=0
        static increament()
        {
            
            return (Counter.count=Counter.count+1)
        }
       static decreament()
        {
            
            return (Counter.count=Counter.count-1)
        }
    }

    console.log(Counter.increament())

    console.log(Counter.decreament())



}