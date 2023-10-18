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

export const RegisterMutation = gql`
  mutation Register($name: String!, $email: ID!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
      user {
        email
        name
      }
    }
  }
`
