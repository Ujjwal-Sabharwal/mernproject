import React, { useEffect, useState } from 'react'
import { Header } from '../../shared/component/Header'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material';
import { ansoperation } from '../../shared/services/ansOperation';
import { apiClient } from '../services/apicall';

export const Result = (props) => {
const param=useParams()
const [data,setData]=useState({});
const getdata= async (url)=>{
  try{
  const question = await apiClient.get(url);
  console.log('data',question);
  setData(question);
  }
  catch(err){
    console.log(err);
  }
}
useEffect( ()=>{
  const url=`http://localhost:1234/quiz/${param.genere}/${param.level}`
  getdata(url);
  
 },[]);

let result;
if(data[1]){
const answerarray=ansoperation.getans()
let score=0
let j=0
for(let i of data.ans){
  if(answerarray[j]===i){
    score++
  }
  j++
}
   result=`${param.genere} ${param.level} Result=${score}`}
   else{
    result='err'
   }
  return (
    <>
    {data[1]?
    <div>
      <Header/>
        <Container maxWidth="sm">    
        <h1>{result}</h1>
        </Container>  
    </div>:<div>loading</div>}
    </>
  )
}
