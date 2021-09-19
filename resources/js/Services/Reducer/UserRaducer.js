import { CREATE_USER, LOGIN_USER } from "../Constants";

const initialState={
    userData:[],
    error: ""
}

export  default (state=initialState, {type,payload , msg })=>
{
 
 
    switch (type) {
        case CREATE_USER:
        
            if(msg=='register'){
            return{
                ...state,
                userData: [payload,...state.userData],
                error: msg
            }
        }
            else{
              return{
                ...state,
                userData: payload,
                error: msg
              }  
            
        }

        case LOGIN_USER:
            if(msg=='login'){
         return   { 
                ...state,
                userData: [payload,...state.userData],
                error: msg
            }
            }

            else{

                return   { 
                    ...state,
                    userData: [payload,...state.userData],
                   error: msg
                }
            }

        default:
            return state

    }   
}