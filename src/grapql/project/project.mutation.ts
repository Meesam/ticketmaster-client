import { gql } from "@apollo/client"

export const CREATE_PROJECT= gql`
    mutation createProject($title:String!,
        $startDate:String,
         $endDate:String,
         $tag:[String],
        $priority:String,
        $projectType:String,
        $description:String,
        $status:String,
        $projectOwener:ID
    ){
        createProject(title:$title,
        startDate:$startDate,
        endDate:$endDate,
        tags:$tag,
        priority:$priority,
        projectType:$projectType,
        description:$description,
        projectOwener:$projectOwener,
        status:$status)
        {
            _id
           title
           description
        }
    }
`