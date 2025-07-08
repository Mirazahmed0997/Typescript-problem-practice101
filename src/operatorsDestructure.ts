{
    
    // rest operators
const friends=(...friend: string[])=>
{
    friend.forEach((fnd : string)=>console.log(fnd))
}

friends("mi","si")


// destructuring

const user = {
    id:123,
    name:{
        firstName: "Miraz",
        lastName:"Ahmed"
    },
    contact: "23134123",
    address: "Bangladesh"

}

const {contact,
    name:{firstName,lastName}
}=user;
    
console.log(lastName)

}