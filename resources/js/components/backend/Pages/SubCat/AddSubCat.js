import React , {useEffect} from 'react';
import Header from '../../comman/Header';
import Sidebar from '../../comman/Sidebar';
import {Form , Button} from 'react-bootstrap';
import { useState  } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { createSubCatAc ,  getAllSubCats } from '../../../../Services/Actions/SubCatAction';
import { getAllcats  } from '../../../../Services/Actions/CatActions';
import {useDispatch,useSelector} from 'react-redux'
  

function AddSubCat() {
    
    const [data , setData] = useState([]);
    const [error , setError] = useState("");
    
 

const history = useHistory();
const user = JSON.parse(localStorage.getItem('user-info'));
const [name , setName] = useState("");
const [status ,setStatus] = useState(1);
const [catId , setCatId] = useState("");
const [parentCat , setParentCat] = useState("");

const dispatch = useDispatch();
const subCatSelector = useSelector(state => state.SubCatRaducer)
const catSelector = useSelector(state => state.CatRaducer);

 



useEffect(() => {
   dispatch(getAllcats());
   dispatch(getAllSubCats());
}, []);

let [setNamee,setSetNamee]=useState(name)


 function subCatAdd(){
   
const formData = new FormData();

if(name=="" && !name){
setError("Please Enter Sub Category Name");
}
else{
    formData.append('name' ,name );
  setError('')
}


if(catId=='' || catId=="0"){
    setError("Please Select Category");

}else{
    formData.append('cat_id',catId);

}

if(status==0){
    formData.append('status',status);
}
else{ 
  formData.append('status',1);
}
if(parentCat!=''){
  formData.append('parent_id',parentCat);
}
else{
  formData.append('parent_id','');

}

formData.append('user_id',user.id);
formData.append('user_role',user.role);



if(catId!=='' && catId!=0 && 1!='' && name!=='' && status!=''){

  dispatch(createSubCatAc(formData));


}

 
 }



console.warn('subcatdata',subCatSelector.subCatData[0])
console.warn('parent id',parentCat)
 
useEffect(() => {
  if(subCatSelector.subError=='Inserted'){
    history.push('/allsubcats')
  }else if(subCatSelector.subError=='already'){
    setError("Sub Category already Exits  ")
  }
  else if(subCatSelector.subError=='error'){
    setError("Some error Please try Again Leater")
  }
  else if(subCatSelector.subError=='value_not'){
    setError("Check Value Some Value Is missing")
  }
  else if(subCatSelector.subError=='user_not'){
    setError("Please Login And try again")
  }
  else{
    
  }
  console.warn("SubSelector",subCatSelector)
  console.warn("Error",subCatSelector.subError);
}, [subCatSelector])


useEffect(() => {
   if(catId!=''){
     setError('')
   }
   if(name!=''){
     setError('')

   }
}, [catId,name])


   return (
        <>

        <Header />
        
        <div id="layoutSidenav">
<Sidebar />


<div id="layoutSidenav_content">

                    <main>
                    {error!='' && error!='Please Enter Sub Category Name' &&  error!='Please Select Category'?<div className="alert alert-danger" role="alert">
  {error}
</div>:null}
                          

<ol className="breadcrumb m-4">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active"> <Link to="allsubcat"> Sub Categories </Link> </li>

                                <li className="breadcrumb-item active"   >Add </li>
                            </ol>



                         <Form>




  <Form.Group className="mb-3 form-pro"   controlId="formBasicEmail">



  <Form.Select value={catId}  onChange={((e)=>setCatId(e.target.value))} >
<option value="0">Select Category</option>

{catSelector.CatData[0]?
catSelector.CatData.map((item)=>

<option key={item.id} value={item.id}>{item.cat_name}</option>
):null

}



</Form.Select>
<br />
  <Form.Select value={catId}  onChange={((e)=>setParentCat(e.target.value))} >
<option value="0">Select Parent Sub Category</option>

{subCatSelector.subCatData[0]?
subCatSelector.subCatData.map((item)=>

<option key={item.id} value={item.id}>{item.name}</option>
):null

}



</Form.Select>
 


     
    <Form.Control type="text"    className="mt-4 p-2 ip"  onChange={((e)=>setName(e.target.value))} placeholder="Enter Sub Category Name" />
    {error=='Please Enter Sub Category Name'?<span className="text-danger">{error}</span> :null}
     <br />
 
 <Form.Select value={status}  className="ip" onChange={((e)=>setStatus(e.target.value))}> 
     <option value = {1}>Active</option>
    <option value={0}>Deactive</option>
  </Form.Select>
 <br />
    
    <div className="d-grid gap-2">
  <Button variant="primary" onClick={subCatAdd} size="lg">
  Publish
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

export default AddSubCat;
