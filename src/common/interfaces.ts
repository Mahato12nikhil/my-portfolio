
export interface IUser{
    id: number;
    name:string,
    email:string,
    phone?:string,
    username:string,
    role?:string,
    validity?:bigint
}