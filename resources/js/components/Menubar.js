import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './backend/AdminPanel';
import {Provider} from 'react-redux';
import store from '../store';
import { BrowserRouter } from 'react-router-dom'
 


function Menubar() {
    return (
        <div>
            <AdminPanel />
              
        </div>
    );
}

export default Menubar;

if (document.getElementById('reactroot')) {
    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
     <AdminPanel />  
    </Provider>
    </BrowserRouter> , document.getElementById('reactroot'));

}
