
export interface IUser {
    _id:string
    firstName: string
    lastName: string
    email:[string]
    mobile:[string]
    password:string
    avatar?:string
    role?:string
    projects?:[string]
    customerId?:string
    dob: Date
    status:boolean
    dateOfEntry?: Date
    lastUpdated?: Date
  }
  

  export interface IUserResponse {
    getUsersByCustomerId:IUser[]
  }