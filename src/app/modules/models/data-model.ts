export interface signUp{
    name:string;
    email:string;
    password:string;
}

export interface LoginData{
    email:string;
    password:string;
}


export interface sellerType{
    name:string;
    email:string;
    password:string;
}


export interface productType{
    name:string;
    price:number;
    description:string;
    imageurl:string;
    category:string;
    color:string;
}
