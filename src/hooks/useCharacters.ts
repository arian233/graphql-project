import { useQuery, gql } from '@apollo/client'

const GET_CHARACTERS = gql`
  query GetSpaceMission($limit: Int){
  launchesPast (limit: $limit) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
  }
}
`

export const useCharacters = () => {
  const limit: any = 10
  const { error, loading, data } = useQuery(GET_CHARACTERS, { variables: { limit }})

  return {
    error,
    loading,
    data
  }
}