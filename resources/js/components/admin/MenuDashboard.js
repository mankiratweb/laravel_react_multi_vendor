import { HashRouter, Route , Switch } from 'react-router-dom';
 
import '../../App.css';
import '../admin/theme_asset/css/style.css';
import '../admin/theme_asset/js/scripts';
import Dashboard from './pages/Dashboard';
 




function MenuDashboard() {
  return (
    <div className="App">
        
     
      <HashRouter basename="/dashboard">
       <Switch>
     <Route exact path="/"><Protected Cmp= {Dashboard} /></Route>
     

 
      </Switch>
      </HashRouter>
    </div>
  );
}

export default MenuDashboard;
