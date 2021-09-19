import {
    CREATE_USER
} from "../Constants";
 
import axios from "axios";



// start Registeration  Action
export const registerAc = (data) => async (dispatch) => {
 
    const result = await axios.post("http://127.0.0.1:8000/api/register",data);
 
    dispatch({
        type: CREATE_USER,
        payload:result.data.result,
        msg:result.data.msg
        
    }); 

 


}
// End Registeration Action


// start Login  Action
export const loginAc = (data) => async (dispatch) => {
 
    const result = await axios.post("http://127.0.0.1:8000/api/login/",data);
 
    dispatch({
        type: CREATE_USER,
        payload:result.data.result,
        msg:result.data.msg
        
    });

 


}
// End Login Action

