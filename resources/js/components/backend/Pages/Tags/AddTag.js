import React , {useEffect} from 'react';
import Header from '../../comman/Header';
import Sidebar from '../../comman/Sidebar';
import {Form , Button} from 'react-bootstrap';
import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { createTagAc } from '../../../../Services/Actions/TagActions';
import {getAllcats} from '../../../../Services/Actions/CatActions';





function AddTag() {
    const dispatch = useDispatch();
    
const history = useHistory();
const user = JSON.parse(localStorage.getItem('user-info'));
const [status ,setStatus] = useState("");
const [error , setError] = useState("");
const [name , setName] = useState("");
const [catId , setCatId] = useState("");
const [data, setData]=useState([])
const tagAddSelect = useSelector(state => state.TagRaducer)
const catAddSelect = useSelector(state => state.CatRaducer)
 
 

useEffect( async() => {
     
 dispatch(getAllcats());
   

 }, [])



 
 



  function tagAdd(){
   
    
   const formData = new FormData();

    if(name==""){
        setError("Please Enter Tag Name");
        }
        else{
            formData.append('name' ,name );
            setError("");
        }
        
    
        if(status==0){
            formData.append('status',0);
        }
        else{
            formData.append('status',1);
        }
    
    
        if(catId=='0' || catId==''){
            setError("Please Select Category");
        }
        else{
            formData.append('cat_id',catId);
           
        } 
           formData.append('user_id',user.id);
 
           formData.append('userRole',user.role);
 

    if(catId!=='' && name!=='' && user.id!='' ){


dispatch(createTagAc(formData));
        
    }

    
 
}

 
useEffect( async() => {
    
    if(tagAddSelect.error=='already'){
   setError("Tag is Alerady exits")
    }
    else if(tagAddSelect.error=='Inserted'){
history.push('/alltags');
    }
    else if(tagAddSelect.error=='value_not'){
        setError("Technocal Issue contact@asktohelp.com")
    }else if(tagAddSelect.error=='user_not'){
        setError("Only Vendor Add Tag Contact Admin Owner ")
    }
    else{
        setError("")
  
    }
 
  }, [tagAddSelect,dispatch])


 
 





    return (
        <>


        <Header />
        
        <div id="layoutSidenav">
<Sidebar />





<div id="layoutSidenav_content">

{error && catId!='' && name!='' ?<div className="text-center alert alert-danger" role="alert">
  {error}
</div>:null}
                    <main>


                    <h1 className='text-center mt-4'>Add Tag</h1>
                    <ol className="breadcrumb m-4">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active"> <Link to="alltags"> Tags</Link> </li>

                                <li className="breadcrumb-item active"   > <Link to="addtags">Add</Link> </li>
                            </ol>










                             <Form className="mb-3 mt-5 form-pro">
  
  <Form.Select value={catId}  onChange={((e)=>setCatId(e.target.value))} >
<option value="0">Select Category</option>
{catAddSelect.tagsData?
catAddSelect.tagsData.map((item)=>

<option key={item.id} value={item.id}>{item.cat_name}</option>
):null

}
</Form.Select>
<span className="error text-justify"> {error == "Please Select Category" ? error : null } </span>
 
    
    <Form.Control type="text"   value={name} className="mt-5 p-3 ip"  onChange={((e)=>setName(e.target.value))} placeholder="Enter Tag Name" />
    
    <span className="error text-center"> {error== "Please Enter Tag Name" ? error : null } </span>
    <br />
<br />
         
       
   
    
     <Form.Select value={status}  className="ip" onChange={((e)=>setStatus(e.target.value))}>
    
 
    <option value = '1'>Active</option>
    <option value='0'>Deactive</option>
  </Form.Select>
  <span className="error"> { error=="Please Select Status" ? error : null } </span>
  <br /><br />
    
    <div className="d-grid gap-2">
  <Button variant="primary" onClick={tagAdd} size="lg">
    Publish
  </Button>
  
</div>

  
 
  
</Form>


              
                    </main>
                    
                </div>
 
</div>
</>

    )
}

export default AddTag;
