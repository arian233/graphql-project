import React from 'react'
import { Typography, ImageListItem, ImageList, ImageListItemBar, Box, Stack, Button, TableContainer, Table, TableRow, TableHead, TableCell, TableBody } from '@mui/material';
import { Container } from '@mui/system';
import { useCharacters } from '../hooks/useCharacters';



export default function CharacterList() {

  const { error, loading, data } = useCharacters()

  console.log(data)

  if (loading) return <Container>Spinner</Container>
  if (error) return <Typography>Error....</Typography>





  return (
    // <Container>
    //   {data.launchesPast.map((launch: {
    //     launch_site: any; mission_name: string
    //   }) => {
    //     return (
    //       <Stack direction="row" mt={5} mb={5}>
    //         <Box >
    //           <Typography>{launch.mission_name}</Typography>
    //           <Typography>{launch.launch_site.site_name_long}</Typography>
    //         </Box>
    //         <Stack direction="column" ml={5}>
    //           <Button>Edit</Button>
    //           <Button>Delete</Button>
    //         </Stack>
    //       </Stack>
    //     )
    //   })}
    // </Container>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Launch Site</TableCell>
            <TableCell>Mission Name</TableCell>
            <TableCell>Edit/ Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.launchesPast.map((launch: { launch_site: any; mission_name: string }) =>
          (
            <TableRow key={launch.launch_site}>
              <TableCell component="th" scope="row">{launch.mission_name}</TableCell>
              <TableCell>{launch.launch_site.site_name_long}</TableCell>
              <TableCell>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>


  )
}
