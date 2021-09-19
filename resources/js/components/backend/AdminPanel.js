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
import Register from './Pages/Users/Register';
import Login from './Pages/Users/Login';
import Protected from './Pages/Users/Protected';
import UpdateTag from './Pages/Tags/UpdateTag';

 


function AdminPanel(){
    return(
 
 
         
<Switch>
    {/* Users Start  */}
<Route exact path="/register" component={Register} /> 
    <Route exact path="/login" component={Login} /> 

    {/* Users End  */}

    {/* Dashboard Start  */}
    <Route exact path="/"> <Protected cmp={Dashboard}/> </Route> 
    <Route exact path="/dashboard" > <Protected cmp={Dashboard} />  </Route>
    {/* Dashboard End  */}
    
    <Route path="/alltags" ><Protected cmp={AllTags} />  </Route> 
    <Route path="/addtag" > <Protected cmp={AddTag} />  </Route>
    <Route path="/updatetag/:id" > <Protected cmp={UpdateTag} />  </Route>

    <Route path="/allcats" >  <Protected cmp={AllCat} />  </Route>
    <Route  path="/addcat" > <Protected cmp={AddCat} /> </Route> 

    <Route   path="/allsubcats" >  <Protected cmp={AllSubCat} /> </Route>
    <Route   path="/addsubcat"  > <Protected cmp={AddSubCat} />  </Route>



    <Route  path="/allpros"  >  <Protected cmp={AllPro} /> </Route>
    <Route  path="/addpro"  >  <Protected cmp={AddPro} /> </Route>

    
</Switch>

       


       
     
        

    )
}


export default AdminPanel ;