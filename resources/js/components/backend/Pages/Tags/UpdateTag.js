import React , {useEffect} from 'react';
import Header from '../../comman/Header';
import Sidebar from '../../comman/Sidebar';
import {Form , Button} from 'react-bootstrap';
import { useState } from 'react';
import {Link, useHistory, withRouter} from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
 
import { findSingleTag, updatedTag } from '../../../../Services/Actions/TagActions';
import { getAllcats } from '../../../../Services/Actions/CatActions';




 
 function UpdateTag(props) {
     
let dispatch= useDispatch(); 

  useEffect( () => {
    dispatch(findSingleTag(props.match.params.id));
    dispatch(getAllcats());

   
},[]);
 

   const history = useHistory();
   const user = JSON.parse(localStorage.getItem('user-info'));
   const [status ,setStatus] = useState("");
   const [error , setError] = useState("");
   const [name , setName] = useState("");
 
   const [catId , setCatId] = useState("");
   
 
   
   let id = props.match.params.id;
   const TagState = useSelector(state => state.TagRaducer.tagsData);
   const catData = useSelector(state => state.CatRaducer)

   let updateState = useSelector(state => state.TagRaducer);
    
 console.warn('TagCheck',TagState.name)
 console.warn('catCheck data', catData.CatData)
 console.warn('user', user.role)
 
//  console.warn("Check Finf",TagState)

function tagupdate(){
 
 const formData = new FormData();
    if(name==''){
        formData.append('name' ,TagState.name);
         
        }
        else{
            formData.append('name' ,name);
             
        }
        
    
        if(status==''){
            formData.append('status',TagState.status);
           
        }
        else{
            formData.append('status',status);
        }
    
    
        if(catId=='0' || catId==''){
            formData.append('cat_id',TagState.cat_id);
        }
        else{
            formData.append('cat_id',catId);
           
        }
    
   if(id!='' && user.id!='' && user.role!=''){
    formData.append('user_id',id);
    formData.append('user_id',user.id);
    formData.append('user_role',user.role);
    console.warn('he',formData)
  dispatch(updatedTag(formData,id));
 
   }
  


}

console.warn('update',updateState.error);

useEffect(() => {
   
  if(updateState.error=='not_vendor'){
    setError("You Can't Update Only Vendor can Update")
      }
   else if(updateState.error=='updated'){
    setError("Updated")
         history.push('/alltags');
      }
       
   else if(updateState.error=='status'){
    setError("Status Cant't Empty ")
      }
      else if(updateState.error=='name'){
        setError("name Cant't Empty ")
      }
      else if(updateState.error=='cat_id'){
        setError("Category Cant't Empty ")
      }else{
        setError("")
      }
      
}, [updateState])

 
    return (
        <> 
        <Header />
        
        <div id="layoutSidenav">
<Sidebar />


<div id="layoutSidenav_content">
  {error?<div className="alert alert-danger" role="alert">
  {error}
</div>:null}

                    <main>
                         

                    <ol className="breadcrumb m-4">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active"> <Link to="/alltags"> Tags </Link> </li>

                                <li className="breadcrumb-item active"   >Update </li>
                            </ol>
                         <Form className="mb-3 mt-5 form-pro">
  
  <Form.Select value={catId}  onChange={((e)=>setCatId(e.target.value))} >
 





{
    catData.CatData!=''?
    catData.CatData.map((item , key)=>
 
  TagState?
  TagState.id==id?
TagState.cat_name==item.cat_name? <option  key={key}  value={item.id}>{item.cat_name}</option> : null: null:null
  ):null
 
}
{
catData.CatData.map((item , key)=>
 
 TagState? TagState.id==id?
TagState.cat_name!=item.cat_name? <option key={key}  value={item.id}>{item.cat_name}</option>: null: null:null
  )



}
 
 


</Form.Select>
<span className="error"> {error == "Please Select Category" ? error : null } </span>
   {
     
 TagState?
 TagState.id==id?
    <Form.Control defaultValue={TagState.name} type="text" className="mt-5 p-3 ip"  onChange={((e)=>setName(e.target.value))} placeholder="Enter Tag Name" />:
  
  
  null:null  }

    
    <br />
<br />
         
       
   
    
     <Form.Select   className="ip" onChange={((e)=>setStatus(e.target.value))}>
    
    
     { 

     TagState?
     TagState.id==id?
     TagState.status==1 ?<>
     < option value = "1">Active</option>
     <option value = "0">Deactive</option>
     </>:<>  <option value = "0">Deactive</option>
     < option value = "1">Active</option></>:null
     :null
     
     }
     
  
  
  
      
  </Form.Select>
  <span className="error"> { error=="Please Select Status" ? error : null } </span>
  <br /><br />
    
    <div className="d-grid gap-2">
  <Button variant="primary" onClick={tagupdate} size="lg">
 Update
  </Button>
  
</div>

  
 
  
</Form>



              
                    </main>
                    
                </div>
 
</div>
</>

    )
}

export default withRouter(UpdateTag);
