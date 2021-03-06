import Header from '../../comman/Header'
 
import { Form , Button    } from 'react-bootstrap';
import Sidebar from '../../comman/Sidebar'; 
import { useState } from 'react';
import { useHistory ,Link} from 'react-router-dom'


function AddCat(){

const history = useHistory();
const [name , setName] = useState("");
const [image , setImage] = useState("");
const [status , setStatus] = useState("");
const [error , setError] = useState("");
const user = JSON.parse(localStorage.getItem('user-info'));



async function catAdd(){
 
    console.warn(name ,image , status );


 const formData  = new FormData();
 if(name==''){
   setError("Please Enter Your Category Name");
 }else{
   formData.append('name',name);

 }

 formData.append('image',image);
if(status=='1' || status== '0'){
  setError("");
  formData.append('status',status);
}else{
  setError("Please Select Status");
}
  
 formData.append('user_id',user.id);
  
 
let result = await fetch("http://127.0.0.1:8000/api/addcat",{
 
  method:'POST',
 
  body: formData
});
 
result =await  result.json();
 
if(result.result[0]=="Inserted"){
history.push('/allcat');
}
 




}



    return(
        <>
        <Header />
        
          <div id="layoutSidenav">
<Sidebar />

    <div id="layoutSidenav_content">
                    <main>
                        
                         <ol className="breadcrumb mb-4 mt-3">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active"> <Link to="/allcat">Categories</Link> </li>

                                <li className="breadcrumb-item active"   >Add </li>
                            </ol>



                         <Form >
  <Form.Group className="mb-3 form-pro h-200"   controlId="formBasicEmail">
     
    <Form.Control type="text"   value={name} className="mt-5 p-3 ip w-100"  onChange={((e)=>setName(e.target.value))} placeholder="Category Name" />
    
    <span className="error"> { error=="Please Enter Your Category Name" ? error : null } </span>

    <br />

         
    <Form.Control type="file"     onChange={((e)=>setImage(e.target.files[0]))} placeholder="Image" /><br />
    
   
    
     <Form.Select value={status}  className="ip" onChange={((e)=>setStatus(e.target.value))}>
    
    <option>Select Status</option>
    <option value="1">Active</option>
    <option value="0">Deactive</option>
  </Form.Select>
    <span className="error"> { error=="Please Select Status" ? error : null } </span>
  <br />
    <div className="d-grid gap-2">
  <Button variant="primary" onClick={catAdd} size="lg">
    Submit
  </Button>
  
</div>

  </Form.Group>

 
  
</Form>















                       
                    </main>
                    
                </div>
 

</div>



        </>

    )
}


export default AddCat;