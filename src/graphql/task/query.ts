import { gql } from '@apollo/client'

export const GetTasksQuery = gql`
  query GetTasks {
    getTasks {
      id
      title
      description
      createdAt
      updatedAt
      tags
      reminderId
      status
    }
  }
`

export const GetTaskQuery = gql`
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
      tags
      reminderId
      status
    }
  }
`
