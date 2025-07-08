{

    //utility type

      type User={
        name: string;
        age:number;
        email?: string;
        contact: string
      }
      //Pick utility type
      type Name=Pick<User,"name"| "age"|"email"|"contact">;
      
      //Omit utility type
      type Contact=Omit<User,"name" | "age" >;

      //Required utility type

      type RequiredUser=Required<User>;

      //partial utility type
      type PartialUser=Partial<User>;

      //Readonly utility type
      type ReadonlyUser=Readonly<User>;

      //Record utility type
      type UserObj=Record<string,unknown>
        const userObj: UserObj = {
            name: "Miraz",
            age: 25,
            email: "miraz@example.com"
        }
}