import { useHistory } from "react-router";
import React , { useEffect } from 'react';

function Protected(props){
    const history = useHistory();
    if(!localStorage.getItem('user-info')){
history.push('/login')
    }
    
   
    let Cmp = props.cmp 
    return(
        <>
    <Cmp />
    </>
    )
}



export default Protected