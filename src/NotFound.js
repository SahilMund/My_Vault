import React from 'react';
import { Redirect} from 'react-router-dom';


const NotFound = () => (
  <div>
    <Redirect to="/"/>
  </div>
);

export default NotFound;