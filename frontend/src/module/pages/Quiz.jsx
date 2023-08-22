import React, { useEffect, useState } from 'react'
import { Message } from '../component/Message'
import { Button1 } from '../component/Button'
import { Header } from '../../shared/component/Header'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useNavigate, useParams } from 'react-router-dom';
import { apiClient } from '../services/apicall';

export const Quiz = (props) => {
  
  const param=useParams()
// const data={1:['chemical formula of water','h2o','o2','co2','h2so4'],
// 2:['chemical formula of oxygen','h2o','o2','co2','h2so4'],
// 3:['chemical formula of carbondioxide','h2o','o2','co2','h2so4'],
// 4:['chemical formula of sulphuric acid','h2o','o2','co2','h2so4'],
// 5:['chemical formula of hydrochloric acid','h2o','o2','co2','hcl'],
// "ans":['h2o','o2','co2','h2so4','hcl']}
// const url=`/quiz/${param.genere}/${param.level}`
const [data,setData]=useState({});
const getdata= async ()=>{
  try{
  const question = await apiClient.get('http://localhost:1234/quiz/science/easy');
  // setdata(question)
  console.log('data',question[1][1]);
  setData(question);
  }
  catch(err){
    console.log(err);
  }
}


// useEffect use krna hoga

useEffect( ()=>{
 
 getdata();
 
},[]);


const end=Object.keys(data).length;

const navigate = useNavigate();
  
    const [count,setvalue]=useState(1)
    const next=()=>{
        setvalue(count+1)
        if(count>end-2){
          // props.fn(data)
          navigate(path)
        }
    }
    const path=`/result/${param.genere}/${param.level}`

  return (
  
    <>
    {data[1]?
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
    </div>:<div>Loading</div>}
    
    </>
  )
}
