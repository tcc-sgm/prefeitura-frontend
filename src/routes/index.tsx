import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn    from '../pages/SignIn';
import SignUp    from '../pages/SignUp';
import Notice    from '../pages/Notice/NoticeView';
import AddNotice from '../pages/Notice/AddNotice';
import Taxes     from '../pages/Taxes/indes';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/notices/view" component={Notice} />
    <Route path="/notices/add" component={AddNotice} />
    <Route path="/taxes" component={Taxes} />
  </Switch>
);

export default Routes;
