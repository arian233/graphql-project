import React from 'react'
import { Typography, ImageListItem, ImageList, ImageListItemBar, Box, Stack, Button, TableContainer, Table, TableRow, TableHead, TableCell, TableBody } from '@mui/material';
import { Container } from '@mui/system';
import { useCharacters } from '../hooks/useCharacters';



export default function CharacterList() {

  const { error, loading, data } = useCharacters()

  if (loading) return <Container>Spinner</Container>
  if (error) return <Typography>Error....</Typography>

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Launch Site</TableCell>
            <TableCell>Mission Name</TableCell>
            <TableCell>Edit/ Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.launchesPast.map((launch: { id: number; launch_site: any; mission_name: string }) =>
          (
            <TableRow key={launch.id}>
              <TableCell>{launch.id}</TableCell>
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
