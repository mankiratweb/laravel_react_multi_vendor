import {
     GET_ALL_TAGS,
     CREATE_TAG,
     DELETE_SINGLE_TAG,
     CHANGE_STATUS_TAG_BUTTON,
     UPDATED_TAG,
     FIND_SINGLE_TAG
     
} from "../Constants";
 
import axios from "axios";



// start All Tags  Action
export const getAllTagAc = () => async (dispatch) => {
 
    const result = await axios.get("http://127.0.0.1:8000/api/alltags");
 
    dispatch({
        type: GET_ALL_TAGS,
        payload:result.data.result,
        msg:result.data.msg
        
    });

 


}
// End All Tags Action



//Start Single Tag Find 

export const findSingleTag = (id) => async (dispatch) => {
    const result = await axios.get("http://127.0.0.1:8000/api/findtag/"+id);
    dispatch({
        type: FIND_SINGLE_TAG,
        payload: result.data.result,
        error: result.data.msg
    })
}




//End Single Tag Find




// Start Create Tag

export const createTagAc = (data) => async (dispatch) => {
    const result = await axios.post("http://127.0.0.1:8000/api/addtag", data);

    dispatch({
        type: CREATE_TAG,
        payload:result.data.result,
        msg: result.data.msg
    })
 
 
  

}
// End create tag


//Delete Tag

export const deleteSingleTag = (id,userId,user_role)=>async (dispatch)=>{
    const result = await axios.delete("http://127.0.0.1:8000/api/deletetag/"+id+"/"+userId+"/"+user_role);


dispatch({
    type:DELETE_SINGLE_TAG,
    payload :id,
    msg:result.data.msg
     
})


}


// End Delet6e Tag 





// Start update Tag 


export const updatedTag = (data,id) => async (dispatch) => {
    const result = await axios.post("http://127.0.0.1:8000/api/updatetag/"+id+"?_method=PUT", data);
 

     
    dispatch({
        type: UPDATED_TAG,
        payload: result.data.result,
        msg:result.data.msg
    })

     
        
}    
    
// End Updated Tag


// Start Status change

export const statusChangeTagButon=(id,userId,role_id)=> async (dispatch)=>{;

    const result = await axios.post("http://127.0.0.1:8000/api/change_status/"+id+"/"+userId+"/"+role_id+"?_method=PUT");



dispatch({
    type: CHANGE_STATUS_TAG_BUTTON,
    payload:result.data.result,
    msg: result.data.msg

})


}

// End status Change 
