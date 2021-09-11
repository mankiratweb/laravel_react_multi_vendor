import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import '../backend/theme_asset/css/styles.css';
import '../backend/theme_asset/js/scripts';
import AllTags from './Pages/Tags/AllTags';
import AddTags from './Pages/Tags/AddTag';
import AllCat from './Pages/Categories/AllCat';
import AddCat from './Pages/Categories/AddCat';
import AllPro from './Pages/Products/AllPro';
import AddPro from './Pages/Products/AddPro';


function AdminPanel(){
    return(
 
 
        <Router>
<Switch>
<Route exact  path="/"> <Dashboard /> </Route>
    <Route  path="/alltags"> <AllTags /> </Route>
    <Route  path="/addtag"> <AddTags /> </Route>


    <Route  path="/allcats"> <AllCat /> </Route>
    <Route  path="/addcat"> <AddCat /> </Route>



    <Route  path="/allpros"> <AllPro /> </Route>
    <Route  path="/addpro"> <AddPro /> </Route>

    
</Switch>

        </Router>


       
     
        

    )
}


export default AdminPanel ;