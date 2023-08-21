import React from 'react'
import Grid from '@mui/material/Grid';
import { Header } from '../../shared/component/Header'
import { Card1 } from '../component/card';
import Stack from '@mui/material/Stack';


export const Genere = () => {
  return (
    <div>
        <Stack spacing={{ sm: 7 }} direction="row" useFlexGap flexWrap="wrap">
        <Header/>
        <Grid container spacing={2} align='center'>
  <Grid item xs={6}>
    <Card1 name="POPCULTURE" desc="respective description1" img="https://e1.pxfuel.com/desktop-wallpaper/1015/1011/desktop-wallpaper-pop-culture.jpg"/>
  </Grid>
  <Grid item xs={6}>
    <Card1 name="CURRENTAFFAIRS" desc="respective description2" img="https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/03/03144122/maxresdefault-4-1-1024x477.jpg"/>
  </Grid>
  <Grid item xs={6}>
    <Card1 name="SCIENCE" desc="respective description3" img="https://img.freepik.com/free-vector/colourful-science-work-concept_23-2148539571.jpg?w=2000"/>
  </Grid>
  <Grid item xs={6}>
    <Card1 name="TECHNOLOGY" desc="respective description4" img="https://cdn.britannica.com/84/203584-050-57D326E5/speed-internet-technology-background.jpg"/>
  </Grid>
</Grid>
</Stack>
    </div>
  )
}
