import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import '../backend/theme_asset/css/styles.css';
import AllTags from './Pages/Tags/AllTags';
import AddTag from './Pages/Tags/AddTag';
 
import AllCat from './Pages/Categories/AllCat';
import AddCat from './Pages/Categories/AddCat';
import AllPro from './Pages/Products/AllPro';
import AddPro from './Pages/Products/AddPro';
import AllSubCat from './Pages/SubCat/AllSubCat';
import AddSubCat from './Pages/SubCat/AddSubCat';


function AdminPanel(){
    return(
 
 
         
<Switch>
    <Route exact path="/" component={Dashboard} /> 
    <Route path="/alltags" component={AllTags} /> 
    <Route path="/addtag" component={AddTag}  /> 

    <Route path="/allcats"  component={AllCat} />  
    <Route  path="/addcat"  component={AddCat} />  

    <Route   path="/allsubcats"  component={AllSubCat} />  
    <Route   path="/addsubcat"  component={AddSubCat} />  



    <Route  path="/allpros"  component={AllPro} />  
    <Route  path="/addpro"  component={AddPro} />  

    
</Switch>

       


       
     
        

    )
}


export default AdminPanel ;