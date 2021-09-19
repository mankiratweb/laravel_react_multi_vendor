import { GET_ALL_CATS } from "../Constants";

const initialState={
    CatData:[],
    error: ''
}

export  default (state=initialState , {type,payload , msg })=>
{

    switch (type) {
        case GET_ALL_CATS:
             
            if(msg=='cat_all'){
            return{
                ...state,
                CatData: payload,
                error: msg
            }}
            else{
              return{
                ...state,
                error: msg
              }  
            
        }
     
        default:
            return state
    }
  


}


