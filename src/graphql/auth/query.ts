import { gql } from '@apollo/client'

export const ProfileQuery = gql`
  query UserProfile {
    userProfile {
      email
      name
      avatar
    }
  }
`
