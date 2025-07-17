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

        displayData()
        {
            console.log(`Name : ${this.name}, ID: ${this.id}, _Balance:${this._balance}`)
        }

        addDeposit(amount:number)
        {
            this._balance=this._balance+amount;
        }
        
    }

    class StudentAccount  extends BankAccount{
        test(){
            this._balance
        }
    }

    const user1= new BankAccount("Miraz",17217,40000)
    user1.addDeposit(100)
    user1.displayData();

    

}