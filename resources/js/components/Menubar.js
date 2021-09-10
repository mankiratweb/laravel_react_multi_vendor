import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './backend/AdminPanel';
import {Provider} from 'react-redux';
import store from '../store';
 


function Menubar() {
    return (
        <div>
            <AdminPanel />
              
        </div>
    );
}

export default Menubar;

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}>
    <Menubar />
    </Provider> , document.getElementById('root'));
}
