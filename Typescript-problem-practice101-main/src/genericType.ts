{

// generic type to make dynamic data type

type GenericArray<T>= Array<T>

// const role : number[]= [1,2,3,4]
const role: GenericArray<number>= [1,2,3,4]

// const mentors :string[]=["x","y","z"]
const mentors :GenericArray<string>=["x","y","z"]


// const booleanArray: boolean[]= [true,false,true]
const booleanArray: GenericArray<boolean>= [true,false,true]




// creates a object model by using the generic type 

const user : GenericArray<{name:string,age:number}> =[
    {
        name: "x",
        age:28,
    },
    {
        name: "Y",
        age:29,
    }
]


// generic tuple

type GenericTuple<X,Y>=[X,Y]

const  cuples : GenericTuple<string,string>=["X" , "Y"]


// generic by using interface




// creates a scema for developer

interface Developer<T>{
    name: string;
    computer: {
        brand: string;
        model:string;
        releaseYear: number
    };
    smartWatch: T;
}


// creates type for smart watch schema for Developer parameter


type watchType ={
    brand:string;
    model:string;
    display:string
}

const developer1 : Developer<watchType>={
    name: "Miraz Ahmed",
    computer:{
        brand:"Mac",
        model:"Air Book 2",
        releaseYear: 2015
    },

    smartWatch: {
        brand:"Colmi",
        model:"V7",
        display:"Emulate"
    }

} 

// creates type for smart watch schema for Developer parameter



interface watchType1 {
    brand:string,
    model:string,
    heartTrack:boolean
}

  

const developer2 : Developer<watchType1>={
    name: "Isty Ahmed",
    computer:{
        brand:"Asus",
        model:"x-25ur",
        releaseYear: 2015
    },

    smartWatch: {
        brand:"Colmi2",
        model:"V77",
        heartTrack:true,
    }


}


console.log(developer1,developer2)

}