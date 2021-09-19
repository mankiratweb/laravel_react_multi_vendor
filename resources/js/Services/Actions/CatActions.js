import {
   GET_ALL_CATS
} from "../Constants";
 
import axios from "axios";



// start All Tags  Action
export const getAllcats = () => async (dispatch) => {
 
    const result = await axios.get("http://127.0.0.1:8000/api/allcats");
 
    dispatch({
        type: GET_ALL_CATS,
        payload:result.data.result,
        msg:result.data.msg
        
    });

 


}
// End All Tags Action



 