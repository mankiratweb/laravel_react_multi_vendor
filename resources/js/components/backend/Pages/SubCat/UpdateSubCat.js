import React,{useState , useEffect} from 'react';
import Header from '../../comman/Header';
import Sidebar from '../../comman/Sidebar';
import {Form , Button} from 'react-bootstrap';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import { getSingleSubCat, updateSubCatAc } from '../../../../Services/Actions/SubCatAction';
import { getAllcats } from '../../../../Services/Actions/CatActions';

function UpdateSubCat(props) {
let history = useHistory();
let [name, setName] = useState("");
const user = JSON.parse(localStorage.getItem('user-info'));
let [catId, setCatId] = useState("");
let [error , setError] = useState("");
 
let [status , setStatus ] = useState("");
const id = props.match.params.id;
const dispatch = useDispatch();
const subCatSelect = useSelector(state => state.SubCatRaducer);
const catData = useSelector(state => state.CatRaducer)
 
// console.warn('id',props.match.params.id)

useEffect(() => {
 dispatch(getSingleSubCat(id));
 dispatch(getAllcats());
    
}, [])
 

 
  



 

















// console.warn("Categories",catData.CatData);

 
function subCatUpdate(){
 

  const formData = new FormData();
 if(name==''){


  formData.append('name',subCatSelect.subCatData.name)

 }else{
   formData.append('name',name);
 }
 if(catId==''){


  formData.append('cat_id',subCatSelect.subCatData.cat_id)

 }else{
   formData.append('cat_id',catId);
 }

 if(status=='1' || status=='0'){


  formData.append('status',status)

 }else{
   formData.append('status',subCatSelect.subCatData.status);
 }

 formData.append('user_id',user.id);
 formData.append('user_role',user.role);

 if(user.id && user.role && id){

    dispatch(updateSubCatAc(id,formData));
 }


 

    
}




useEffect(() => {
   if(subCatSelect.subError=='updated'){
    setError('Sub category Updated Successfully');
  
      history.push('/allsubcats');
   }
   else if(subCatSelect.subError=='empty_id'){
    setError('Sub category Not available');
  
   }
   else if(subCatSelect.subError=='name_already'){
    setError('Enter  other Name this name Is alerady exits ');
     
   }
   else if(subCatSelect.subError=='not_vendor'){
    setError(' You Can Update only Your Sub Category ');
    
   }
   else if(subCatSelect.subError=='error'){
    setError('Somthong wrong Contact admin owner support@admin.com');
 
   }else{
    setError('');
   }
}, [subCatSelect])

 

//  console.warn("updated",subCatSelect);

 

 






    return (
        <>

        <Header />
        
        <div id="layoutSidenav">
<Sidebar />


<div id="layoutSidenav_content">

                    <main>
                    {error?<div className="alert alert-danger" role="alert">
  {error}
</div>:null}
                        
<ol className="breadcrumb m-4">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active"> <Link to="allsubcat"> Sub Categories </Link> </li>

                                <li className="breadcrumb-item active"   >Update </li>
                            </ol>

 




                         <Form className="mb-3 form-pro">


                         <Form.Select  value={catId}  onChange={((e)=>setCatId(e.target.value))} >

 {  catData.CatData!=''?
 catData.CatData.map((item,key)=>
 subCatSelect.subCatData!=''?
item.cat_id==subCatSelect.subCatData.cat_id?<option key={key} value={item.cat_id}  >{item.cat_name}</option>:null
:null
):null
 
                        } 

                         {
catData.CatData!=''  ?
  catData.CatData.map((item,key)=>
 
  subCatSelect.subCatData!=''?
item.cat_id!=subCatSelect.subCatData.cat_id?<option key={key} value={item.cat_id}  >{item.cat_name}</option>:null:
null):null     } 

 

</Form.Select>
 
    {
    
    
    
  
   subCatSelect.subCatData!='' &&  subCatSelect.subCatData.id==id?
    <Form.Control type="text"   defaultValue={subCatSelect.subCatData.name}  className="mt-5 p-3 ip"  onChange={((e)=>setName(e.target.value))} placeholder="Enter Sub Category Name" />
    :
    
    <Form.Control type="text"     className="mt-5 p-3 ip"  onChange={((e)=>setName(e.target.value))} placeholder="Enter Sub Category Name" />
  
 
   
    }  <br />

         
       
   
    
     <Form.Select value={status}  className="ip" onChange={((e)=>setStatus(e.target.value))}>
    
    { 
    
    
     
    subCatSelect.subCatData!='' &&  subCatSelect.subCatData.status==1? 
      <><option value = "1">Active</option><option value="0">Deactive</option> </>
      :
      <><option value="0">Deactive</option> <option value = "1">Active</option> </>
      
    }
    
    
   
    



  </Form.Select>
   
  <br />
    
    <div className="d-grid gap-2">
  <Button variant="primary" onClick={subCatUpdate} size="lg">
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

export default withRouter(UpdateSubCat);
