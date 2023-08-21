import React from 'react'
import { Header } from '../../shared/component/Header'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material';
import { ansoperation } from '../../shared/services/ansOperation';

export const Result = () => {
const data={1:['q1','o1*','o2*','o3*','o4*'],2:['q2','o1+','o2+','o3+','o4+'],3:['q3','o1-','o2-','o3-','o4-'],'ans':['o1*','o3+','o2-']}
const answerarray=ansoperation.getans()
let score=0
let j=0
for(let i of data.ans){
  if(answerarray[j]===i){
    score++
  }
  j++
}
  const param=useParams();
  const result=`${param.genere} ${param.level} Result=${score}`
  return (
    <div>
      <Header/>
        <Container maxWidth="sm">    
        <h1>{result}</h1>
        </Container>  
    </div>
  )
}
