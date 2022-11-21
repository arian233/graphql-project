import { useQuery, gql } from '@apollo/client'

const GET_CHARACTERS = gql`
  query GetSpaceMission($limit: Int){
  launchesPast (limit: $limit) {
    id
    mission_name
    launch_site {
      site_name_long
    }
  }
}
`

export const useCharacters = () => {
  const limit: any = 100
  const { error, loading, data } = useQuery(GET_CHARACTERS, { variables: { limit }})

  return {
    error,
    loading,
    data
  }
}