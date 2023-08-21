import React from 'react'
import { Header } from '../../shared/component/Header'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
export const Home = () => {
  return (
    <div>
        <Header/>
        <Box align="center">
         <h1>hello</h1>
         <NavLink to='/genere'><Button variant="contained">Get Started</Button></NavLink>
        </Box>
    </div>
  )
}

