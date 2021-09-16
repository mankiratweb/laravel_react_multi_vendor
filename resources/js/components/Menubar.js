import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './backend/AdminPanel';
import {Provider} from 'react-redux';
import store from '../store';
import { BrowserRouter } from 'react-router-dom';


if (document.getElementById('reactroot')) {
    ReactDOM.render(
         
        <Provider store={store}>
            <BrowserRouter>
            <AdminPanel />
          </ BrowserRouter>
    </Provider>
      , document.getElementById('reactroot')
      
      );

}
