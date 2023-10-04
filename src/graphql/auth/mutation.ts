import { gql } from '@apollo/client'

export const LoginMutation = gql`
  mutation Login($email: ID!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        name
        avatar
      }
    }
  }
`
