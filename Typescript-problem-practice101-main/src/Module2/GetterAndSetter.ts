{

    class BankAccount{
        name:string;
        readonly id:number;
        protected _balance:number;

        constructor(name:string,id:number,_balance:number)
        {
            this.name=name;
            this.id=id;
            this._balance=_balance;
        }

        set addBalance(amount:number)
        {
            this._balance=this._balance+amount
        }

        get Balance()
        {
            return this._balance
        }

     
    }


    const user1= new BankAccount("Miraz",17217,40000)
    user1.addBalance=500
    const MyBalance= user1.Balance
    console.log(MyBalance)

    

}