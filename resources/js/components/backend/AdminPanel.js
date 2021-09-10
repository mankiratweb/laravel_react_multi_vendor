import { HashRouter, Route , Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import '../backend/theme_asset/css/styles.css';
import '../backend/theme_asset/js/scripts';
import '../../../css/app.css';

function AdminPanel(){
    return(

        <HashRouter basename="adminPanel">
<Switch>
    <Route  path="/"> <Dashboard /> </Route>
</Switch>

        </HashRouter>


       
     
        

    )
}


export default AdminPanel ;