import React , { useState , useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { loginAc } from '../../../../Services/Actions/UserActions';

function Login(){
    
    let history= useHistory();
    useEffect(()=> {
        if(localStorage.getItem('user-info'))
        {
           history.push('/'); 
        }
    
    },[]);
    let [email , setEmail]= useState("");
    let [password , setPassword] = useState("");
    let [errorlog , setErrorLog] = useState("");
    const dispatch = useDispatch();
    const loginUser =  useSelector(state => state.UserRaducer)



async function loginForm(){

    console.log(email , password)
    

if(email==''){
    setErrorLog("email")
} 
else if(password==''){
setErrorLog("pass")
}else{
    setErrorLog('')
}


console.warn('err',errorlog)
 

if(email!=''&& password!=''){
 const data= { email,password }
 
const formData = new FormData(); 
formData.append('email', email);
formData.append('pass', password);
 
    dispatch(loginAc(formData))
 
   
 
}


      

  
}


if(loginUser.error=='login'){
const data = {
   id: loginUser.userData[0].id,
   name:loginUser.userData[0].name,
   email:loginUser.userData[0].email,
   role:loginUser.userData[0].role,
   
}
localStorage.setItem('user-info',JSON.stringify(data))
   console.warn('login data',data) 
    history.push('/dashboard')
}





    return(
        



        <div id="layoutAuthentication" className="bg-primary">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3>
                                    
                                     
                                    </div>
                                    <div className="card-body">
{

loginUser.error=='login'?<div className="alert alert-info" role="alert">
 Login Successfully
</div>:loginUser.error=='not_login'?<div className="alert alert-primary" role="alert">
  Email Not Found Check Your Email !
</div>:loginUser.error=='incorrect'?<div className="alert alert-danger" role="alert">
Wrong Password Check Your Password !
</div>:null

}



                                        <form>



                                            <div className="form-floating mb-3"> 
                                                <input className="form-control" id="inputEmail" type="email" value={email} onChange={((e)=>setEmail(e.target.value))} placeholder="name@example.com" />
                                                <label htmlFor="inputEmail">Email address</label>
                                             {errorlog=='email'?<span className='text-danger'>Please Enter Email</span>:null}
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputPassword" value={password} onChange={((e)=>setPassword(e.target.value))} type="password" placeholder="Password" />
                                                <label htmlFor="inputPassword">Password</label>
                                                {errorlog=='pass'?<span className='text-danger '>Please Enter  Password</span>:null}
                                          
                                            </div>
                                           
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <Link className="small" to="forgot">Forgot Password?</Link>
                                                <button type="button" className="btn btn-primary"  onClick={ loginForm } >Login</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><Link to="register">Need an account? Sign up!</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        
        </div>






























    )
}




export default Login