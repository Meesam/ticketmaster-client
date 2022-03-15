import { IUser } from "./user"

export interface IProjectResponse{
    _id:string
    title:string
    startDate?:Date
    endDate?:Date
    status:string   /* ex. Active, Closed, InActive, New, onHold  */
    tags:[string]
    priority:string
    projectType:string
    projectOwener:IUser
    projectMembers?:[IUser]
    ticket:[string]
    sprints:[string]
    dateOfEntry?: Date
    lastUpdated?: Date
    description:string
 }

 export interface IProjectOwnerResponse {
   getProjectsByOwner:IProjectResponse[]
 }