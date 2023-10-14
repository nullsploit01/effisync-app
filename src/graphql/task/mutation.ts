import { gql } from '@apollo/client'

export const CreateTaskMutation = gql`
  mutation CreateTask($title: String!, $description: String, $tags: [String!], $reminderId: ID) {
    createTask(
      task: { title: $title, description: $description, tags: $tags, reminderId: $reminderId }
    ) {
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
