import React, { useRef } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Header } from './Header';

export const Login = () => {
    const userName=useRef()
    const password=useRef()
    const path=`/home/${userName}`
    console.log(userName);
  return (
    <div>
        <Header/>
        <TextField id="userName" label="userName" variant="outlined" inputRef={userName} />
        <TextField id="password" label="password" variant="outlined" inputRef={password} />
        <NavLink to={path}><Button variant="contained">login</Button></NavLink>
    </div>
  )
}
