import { gql } from "@apollo/client"

export const GET_PROJECTS_BY_OWNER = gql `
  query getProjectsByOwner($projectOwener:ID!){
    getProjectsByOwner(projectOwener:$projectOwener){
     _id
     title
     description
    }
  }
`

export const GET_PROJECT_BY_ID = gql` 
   query getProjectById($_id:ID!){
     getProjectById(_id:$_id){
      _id
    title
    description
    priority
    tags
    status
    startDate
    endDate
    projectType
     }
   }
`