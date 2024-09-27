import React from 'react';
import {Switch} from 'react-router-dom/cjs/react-router-dom.min';
import Login from '../pages/login/index.js';
import Page404 from '../pages/Page404';
import MyRoute from './myRoute.js';


export default function Routes(){
  return(
      <Switch>
        <MyRoute exact path="/" component={Login}/>
        <MyRoute path="*" component={Page404}/>
      </Switch>
  )
}
