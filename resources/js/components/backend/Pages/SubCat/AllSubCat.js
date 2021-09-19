import React , {useEffect ,useState} from 'react';
import Header from '../../comman/Header';
import Sidebar from '../../comman/Sidebar';
import {Table, Button} from 'react-bootstrap';
import { Link , withRouter} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { getAllSubCats,changeStatusAc, deleteSubcatAc } from '../../../../Services/Actions/SubCatAction';
 

function AllSubCat() {
    
    const [data , setData] = useState([]);
    const user = JSON.parse(localStorage.getItem('user-info'));
  const dispatch = useDispatch();
  const  subCatSelect= useSelector(state => state.SubCatRaducer);
  const [error,setError]=useState('');
     
 
 


useEffect( () => {
  dispatch(getAllSubCats());
       }, [])
 
      //  console.warn('check',subCatSelect)



       

 useEffect(() => {
     
     if(subCatSelect.subError=='deleted'){
      setError('')
       dispatch(getAllSubCats());
  
    }
     else  if(subCatSelect.subError=='id_delete_empty'){
      setError("you Can't delete beacause Sub categorie Not Avilable");
      dispatch(getAllSubCats());

    }
     else  if(subCatSelect.subError=='vendor_delete_empty'){
      setError('You delete only Your Sub categories ')
    }
     else  if(subCatSelect.subError=='user_delete_empty'){
      setError('please login and than try to delete ')
      dispatch(getAllSubCats());
    }
    else if(subCatSelect.subError=='changed'){
setError('')
dispatch(getAllSubCats());
    }
    else if(subCatSelect.subError=='id_status_empty'){
setError("you can't changed beacause Sub categorie Not Avilable ")
dispatch(getAllSubCats());
    }
    else if(subCatSelect.subError=='user_status_empty'){
setError("Please login and than try to status change")
dispatch(getAllSubCats());
    }
    else if(subCatSelect.subError=='vendor_status_empty'){
      setError("you can Change  only your Sub Categories Status")
      dispatch(getAllSubCats());
    }
    else if(subCatSelect.subError=='error'){
      setError("Some Technical Error Please Try Again leater")
      dispatch(getAllSubCats());
    }

    
 }, [subCatSelect])




 
 

 




 

 
 
    
    
 
    return (
        <>

        <Header />
        
        <div id="layoutSidenav">
<Sidebar />


<div id="layoutSidenav_content">
                    <main>
                    {error?<div className="alert alert-danger text-center" role="alert"> {error} </div>:null}
                    <div className="container-fluid px-4 mt-3">
                          <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                            <li className="breadcrumb-item active"> Sub Categories </li>
                         
                            <li  className="breadcrumb-item active"   ><Link to="/addsubcat">Add </Link></li>
                        </ol>
                       
                     
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table me-1"></i>
                 Sub Categories
                            </div>
                            <div className="card-body table-responsive">
                            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th className="text-center text-capitalize"   >Sno</th>
      <th className="text-center" style={{width:350}}>Name</th>
      <th className="text-center" style={{width:150}}>Categories</th>
     <th className="text-center" style={{width:150}}>Status</th>
      <th className="text-center"  style={{width:350}}>Action</th>
    </tr>
  </thead>

  <tbody>
    {
    subCatSelect.subCatData[0]?
      
       subCatSelect.subCatData.map((item , key)=>


<tr className="text-center" key={key}>
      <td >{key+1}</td>
      <td>{item.name}</td>
      <td>{item.cat_name}</td>
     
           
      <td>{
      
      item.status=='1' ?'Active' :'Deactive'
      
      }</td>
      
      <td>
      <Link to={"/updatesubcat/"+item.id}  className="btn btnpro btn-success mb-2">Edit</Link>
    {item.status=='0'?  <Button  onClick={(()=>{dispatch(changeStatusAc(item.id,user.id,user.role))})} className=" btnpro btn-primary mb-2">Active</Button> :
    <Button onClick={(()=>{dispatch(changeStatusAc(item.id,user.id,user.role))})} className=" btnpro btn-danger mb-2">Deactive</Button>

    }
      <Button  onClick={(()=>{dispatch(deleteSubcatAc(item.id,user.id,user.role))})} className="btnpro btn-danger">Delete</Button>
      </td>
    </tr>




):null


 

    }
    
  </tbody>
</Table>

{subCatSelect.subError=='empty'?

<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Empty Data ! Add New Sub Category</h4>
  </div>


:null}
                            </div>
                        </div>
                    </div>

 




                       
                    </main>
                    
                </div>
 









</div>


        </>
    )
}

export default withRouter(AllSubCat) ;
