import React, { useState } from 'react'
import { Message } from '../component/Message'
import { Button1 } from '../component/Button'
import { Header } from '../../shared/component/Header'
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate, useParams } from 'react-router-dom';
// import { Button } from '@mui/material';
// import { styled } from '@mui/material/styles';

export const Quiz = () => {
const data={1:['q1','o1*','o2*','o3*','o4*'],2:['q2','o1+','o2+','o3+','o4+'],3:['q3','o1-','o2-','o3-','o4-']}
const end=Object.keys(data).length;
// console.log(end);
const navigate = useNavigate();
  const param=useParams()
    const [count,setvalue]=useState(1)
    const next=()=>{
        setvalue(count+1)
        if(count>end-1){
          navigate(path)
        }
    }
    const path=`/result/${param.genere}/${param.level}`
    // const question=`question ${count}`
  return (
    <div>
        <Stack spacing={{ sm: 7 }} direction="column" useFlexGap flexWrap="wrap">
          <h1>{param.genere} {param.level}</h1>
        <Header/>
      <Grid container rowGap={4}>
        <Grid item xs={12} sx={{ boxShadow: 3, borderTop:1 }} align='center'>
          <Message message={data[count][0]}/>
        </Grid>
        <Grid item xs={12} sx={{boxShadow:3}} >
        <Stack spacing={{ sm: 7 }} direction="row" useFlexGap flexWrap="wrap">
            <Button1 message={data[count][1]} fn={next} name='1'/><Message message={data[count][1]}/>
        </Stack>
        </Grid>
        <Grid item xs={12} sx={{boxShadow:3}} >
        <Stack spacing={{ sm: 7 }} direction="row" useFlexGap flexWrap="wrap">
            <Button1 message={data[count][2]} fn={next} name='2'/><Message message={data[count][2]}/>
        </Stack>
        </Grid>
        <Grid item xs={12} sx={{boxShadow:3}} >
        <Stack spacing={{ sm: 7 }} direction="row" useFlexGap flexWrap="wrap">
            <Button1 message={data[count][3]} fn={next} name='3'/><Message message={data[count][3]}/>
        </Stack>
        </Grid>
        <Grid item xs={12} sx={{boxShadow:3}} >
        <Stack spacing={{ sm: 7 }} direction="row" useFlexGap flexWrap="wrap">
            <Button1 message={data[count][4]} fn={next} name='4'/><Message message={data[count][4]}/>
        </Stack>
        </Grid>
      </Grid>
    </Stack>
    </div>
  )
}