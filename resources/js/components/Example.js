import React from 'react';
import ReactDOM from 'react-dom';
import MenuDashboard from './admin/MenuDashboard';

function Example() {
    return (
        <div>
            
             <MenuDashboard />
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
