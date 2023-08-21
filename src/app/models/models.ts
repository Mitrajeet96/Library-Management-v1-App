export interface SidenavItem{
  title:string;
  link:string;
}

export enum UserType{
  ADMIN,
  USER
}

export interface User{
  id:number,
  firstName:string,
  lastName:string,
  email:string,
  mobile:string,
  password:string,
  blocked:boolean,
  active:boolean,
  createdOn:string,
  usertype:UserType,
  fine:number
}
