import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { registerAc } from '../../../../Services/Actions/UserActions';
import { useHistory, Link } from 'react-router-dom';





function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [cpass, setCpass] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();
    const registerUser = useSelector((state) => state.UserRaducer);








    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('/');
        }

    }, []);









    async function signUp() {
        let role = 1
        console.warn("name", name);
        if (name=='') {
            setError("name")
        }
       else if (email=='') {
            setError("email")
        }
      else  if (password=='') {
            setError("pass")
        }
      else  if (cpass=='') {
            setError("cpass")
        }


      else  if (password !== cpass) {
            setError("pass_not")
        } else {
            setError('')
        }
        if (password == cpass && password && name && email) {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('pass', password);


            dispatch(registerAc(formData));

        }


    }


    if (registerUser.error == 'register') {
        history.push('/login');
    }

    return (


        <div id="layoutAuthentication" className="bg-primary">
            <div id="layoutAuthentication_content">
                <main>

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                                    <div className="card-body">
                                        {registerUser.error == 'register' ? <div className="alert alert-info text-center" role="alert">
                                            your account register Successfuly
                                        </div> : registerUser.error == 'already' ?
                                            <div className="alert alert-danger text-center" role="alert">
                                                This Email is already Exits !
                                            </div> : registerUser.error == 'tech_error' ?

                                                <div className="alert alert-danger text-center" role="alert">
                                                    Yout Can't Regiter Contact admin owner !
                                                </div> : registerUser.error = ''

                                        }

                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="Name" type="text" value={name} onChange={((e) => setName(e.target.value))} placeholder="Enter your   name" />
                                                        <label htmlFor="inputFirstName">First name</label>

                                                            </div>
                                                            {error == 'name' ? <span style={{ color: 'red' }} >Please Enter Your Name</span> : null}
                                           
                                                </div>
                                                 
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 ">
                                                        <input className="form-control" id="inputEmail" type="email" value={email} onChange={((e) => setEmail(e.target.value))} placeholder="name@example.com" />
                                                        <label htmlFor="inputEmail">Email address</label>
                                                      
                                                    </div>
                                                    {error == 'email' ? <span style={{ color: 'red' }} >Please Enter Your Email</span> : null}

                                                </div>
                                             
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPassword" value={password} onChange={((e) => setPass(e.target.value))} type="password" placeholder="Create a password" />
                                                        <label htmlFor="inputPassword">Password</label>
                                                         </div>
                                                         {error == 'pass' ? <span style={{ color: 'red' }} >Please Enter Your Password</span> : null}
                                              
                                                </div>
                                                   
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPasswordConfirm" type="password" value={cpass} onChange={((e) => setCpass(e.target.value))} placeholder="Confirm password" />
                                                        <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                                                            </div>
                                                            {error == 'cpass' ? <span style={{ color: 'red' }} >Please Enter Your Password</span> : null}
                                              
                                                </div>
                                                  
                                            </div>
                                            {
                                                error == 'pass_not' ?
                                                    <span className="text-justify" style={{ color: 'red' }} >Password Not Match</span> : null
                                            }
                                            <div className="mt-4 mb-0">
                                                <div className="d-grid"><button type="button" className="btn btn-primary btn-block" onClick={signUp}>Create Account</button></div>
                                                <div className="d-grid"><Link type="button" className="btn btn-danger text-light  btn-block mt-4" to='/login'>Login</Link></div>
                                            </div>
                                        </form>
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



export default Register