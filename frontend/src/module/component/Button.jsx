import React from 'react'
import {Button} from '@mui/material';
import { ansoperation } from '../../shared/services/ansOperation';
export const Button1 = (props) => {
    const clicked=()=>{
        console.log(props.message);
        ansoperation.addans(props.message)
        // console.log(ansoperation.getans());
        props.fn()
    }
  return (
    <Button onClick={clicked} color="warning" sx={{width:50, border:1}} size="small" variant="contained"></Button>
  )
}
