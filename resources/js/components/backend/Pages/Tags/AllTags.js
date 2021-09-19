import React , {useEffect ,useState} from 'react';
import Header from '../../comman/Header';
import Sidebar  from '../../comman/Sidebar';
import {Table, Button} from 'react-bootstrap';
import { Link, withRouter} from 'react-router-dom';
 
import {useSelector , useDispatch} from 'react-redux';
import {deleteSingleTag, getAllTagAc, statusChangeTagButon} from '../../../../Services/Actions/TagActions'


function AllTags() {
const dispatch = useDispatch()
const tagsSel = useSelector((state) => state.TagRaducer);
const tagError = useSelector((state) => state.TagRaducer.error);
const user = JSON.parse(localStorage.getItem('user-info'));
let  error = '';
 console.warn('tagsel',tagsSel)




    useEffect(() => dispatch(getAllTagAc()),[])

     
 

  function deleteTag(id){
    
    
     dispatch(deleteSingleTag(id,user.id,user.role))
    
     
   
    deleteTagError();
    

 

}

function deleteTagError(){
  if(tagError=='deleted'){
    
    alert('Deleted Successfully')
   
  }
  else if(tagError=='fault'){
    alert('Something Wrong Contact Owner')
  }
  else if(tagError=='error_deleted'){
    alert('Already Deleted ');
  }
  else if(tagError=='tag_not_exits'){
    alert('This tag is not Exits');
  }
  else if(tagError=='user_not_exits'){
    alert('user not Exits ');
  }

  dispatch(getAllTagAc())



}
  
console.warn('role',user.role)
 
 function   statusChange(id){
 
         dispatch(statusChangeTagButon(id,user.id,101));
            
         statusErrorSet();
 

}


 

function statusErrorSet(){
  if(tagError=='show_not'){
      
alert('Tag Not Found')
      
   } if(tagError=='not_change'){
    
     alert('Status Not  Change')
  }
  dispatch(getAllTagAc())

}
 





 
    return (
        <>

        <Header />
        
        <div id="layoutSidenav">
<Sidebar />


<div id="layoutSidenav_content">

                    <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Tags</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                            <li className="breadcrumb-item active"> Tags </li>
                         
                            <li  className="breadcrumb-item active"   ><Link to="/addtag">Add </Link></li>
                        </ol>
                        {
                                tagError =='not_change'?
                              
                              <div className="alert alert-info" role="alert">
                              Only Admin Can Change This Status 
                              
                            </div>:    tagError=='show_not'?<div className="alert alert-danger" role="alert">
                              This Tag Not Exits
                               
                            </div>:  tagError=='delete'?<div className="alert alert-info" role="alert">
                              Delete Succefully
                            
                            </div>:null
                            }
                     
                        <div className="card mb-4">
                            <div className="card-header">
                    
                                <i className="fas fa-table me-1"></i>
                Tags
                            </div>
                            


                            <div className="card-body table-responsive">
                            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th style={{width:100}}>Sno</th>
      <th style={{width:150}}>Tags</th>
      {/* <th style={{width:150}}>Categories</th> */}
     <th style={{width:150}}>Status</th>
      <th style={{width:350}}>Action</th>
    </tr>
  </thead>
  <tbody>
    {
tagsSel.tagsData[0]?
tagsSel.tagsData.map((item , key)=>


<tr  key={key}>
      <td>{key+1}</td>
      <td>{item.name}</td>
      {/* <td>{item.cat_name}</td> */}
     
           
      <td>{
      
      item.status=='1' ?'Active' :'Deactive'
      
      }</td>
      {
 
      }
      <td>
      <Link to={"/updatetag/"+item.id}  className="btn mb-2 btnpro btn-success">Edit</Link>
     {item.status==0 ? <Button  onClick={(()=>{statusChange(item.id)})} className=" btnpro mb-2 btn-primary">Active </Button>:<Button  onClick={(()=>{statusChange(item.id)})} className=" btnpro btn-danger mb-2">Deactive </Button> }
      <Button  onClick={(()=>{deleteTag(item.id)})} className=" btnpro btn-danger">Delete</Button>
      </td>
    </tr>




): 
tagError=='not-done' ?
<tr>
  <td colspan="4">
<div className="alert alert-info text-center" role="alert">
 Empty Tags  <Link to='/addtag'> Add Tag</Link>
</div>
</td>
</tr> : 
 null

    }
    
  </tbody>
</Table>
 

                            </div>
                        </div>
                    </div>

 




                       
                    </main>
                    
                </div>
 









</div>


        </>

    )
}

export default withRouter(AllTags);
