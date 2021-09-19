import { 
    GET_ALL_SUBCATS ,
    CHANGE_STATUS_SUBCATS_BUTTON,
    CREATE_SUBCATS,
    UPDATED_SUBCATS,
    FIND_SINGLE_SUBCATS,
    DELETE_SINGLE_SUBCATS



} from "../Constants";

import axios from "axios";




export const getSingleSubCat = (id)=> async(dispatch)=>{

const result = await axios.get("http://127.0.0.1:8000/api/findsubcat/"+id);
dispatch({
    type: FIND_SINGLE_SUBCATS,
    payload: result.data.result,
    msg:result.data.msg

});

}









// Start All Sub Cat 


export const getAllSubCats=()=> async (dispatch)=>{


    const result =  await axios.get("http://127.0.0.1:8000/api/allsubcats");
    dispatch({
        type: GET_ALL_SUBCATS,
        payload: result.data.result,
        msg:result.data.msg

    });
    
 

}

// End All Sub Cat 




//Change Status All Sb Cat Start  

export const changeStatusAc=(id,userId,role)=>async (dispatch)=>{
    const result = await axios.post("http://127.0.0.1:8000/api/changesubcatstatus/"+id+"/"+userId+"/"+role+"?_method=PUT");
   dispatch({
       type:CHANGE_STATUS_SUBCATS_BUTTON,
       payload:result.data.result,
       msg:result.data.msg
   }) 
}


//Change Status All Sb Cat End



// Insert add Sub Cat Start 

export const createSubCatAc = (data)=> async(dispatch)=>{

    const result =await axios.post("http://127.0.0.1:8000/api/addsubcat",data);
   
        dispatch({
            type:CREATE_SUBCATS,
     payload:result.data.result,
            msg: result.data.msg
    
        })

    
       
 
}





// Insert add Sub Cat End











// Delete Sub cart start 
export const deleteSubcatAc = (id,userId,userRole)=>async(dispatch)=>{
    const result =await axios.delete("http://127.0.0.1:8000/api/deletesubcat/"+id+"/"+userId+"/"+userRole);
    dispatch({
        type:DELETE_SINGLE_SUBCATS,
        payload:id,
        msg: result.data.msg,
         
    })
}


// Delete Sub cart End



// Update Start Sub cat 
export const updateSubCatAc = (id,formData)=>async(dispatch)=>{
    const result = await axios.post("http://127.0.0.1:8000/api/updatesubcat/"+id+"?_method=PUT",formData);
    dispatch({
        type:UPDATED_SUBCATS,
        payload:result.data.result,
        msg:result.data.msg
    });
}


// Update End  Sub cat