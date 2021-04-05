import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import SearchProtocol from '../pages/Catalog/SearchProtocol';
import AddProtocol from '../pages/Catalog/AddProtocol';
import DetailProtocol from '../pages/Catalog/DetailProtocol';
import Taxes from '../pages/Taxes/indes';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/protocolos/consulta" component={SearchProtocol} />
    <Route path="/protocolos/cadastro" component={AddProtocol} />
    <Route path="/protocolos/detalhe" component={DetailProtocol} />
    <Route path="/taxes" component={Taxes} />
  </Switch>
);

export default Routes;
