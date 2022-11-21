import React, { useState } from 'react'
import { Stack, Box, Typography, FormControl, InputLabel, MenuItem, Select, FormHelperText, TextField, Button, Icon } from '@mui/material';
import { useMutation, gql } from '@apollo/client'

type UserDetails = {
    id: string
    name: string
}

type AddUserResponse = {
    returning: Array<UserDetails>;
}

const ADD_USER = gql`
  mutation InsertUser($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      returning {
        id
        name
      }
    }
  }
`;





function InfoType() {
    const [name, setName] = useState('');

    const [addUser, { data, loading, error }] = useMutation<{ insert_users: AddUserResponse }>(ADD_USER);

    if (loading) return <Typography>Please wait</Typography>;
    if (error) return <Typography>Submission error! ${error.message}</Typography>;

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }
    function handleOnSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("something")
        addUser({ variables: { type: name } });
        setName('');

    }
    console.log(data);
    return (
        <Stack>
            <Typography variant="h5" component="h5">
                Welcome to the SpaceX Information Page:
            </Typography>
            <Typography>By typing your name below and submitting this form you can add your name to the SpaceX's API database: </Typography>
            <Box mt={5} mb={5}>
                <form onSubmit={handleOnSubmit}>
                    <label htmlFor="username">Name: </label>
                    <input required name="username" type="text" onChange={handleOnChange} value={name} />
                    <button type="submit">Add User</button>
                    <p>
                        New User ID: {data && data.insert_users.returning[0].id}
                    </p>
                </form>
            </Box>

        </Stack>
    )
}

export default InfoType