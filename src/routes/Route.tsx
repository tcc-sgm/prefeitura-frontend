import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate ?: boolean;
  isFuncionario ?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isFuncionario = false,
  component: Component,
  ...rest
}) => {
  const {user} = useAuth();

  return (
    <ReactDOMRoute
      { ...rest}
      render={ ({location}) => {
        return (isPrivate === !!user  && !isFuncionario)? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: (isPrivate && (localStorage.getItem('@Prefeitura:user') === null)) ? 
                  '/' :
                  (isFuncionario && !permissoes()) ?
                  '/access-denied' : 
                  '/notices/view',
                  state: { from: location },
            }}
          />
        );

      }}>

    </ReactDOMRoute>
  )
}

function permissoes(): boolean {
  const user = localStorage.getItem('@Prefeitura:user');
  let isHabilitado = false;
  if (user) {
      const { roles } = JSON.parse(user);
      const permissoes: Array<string> = roles;
      permissoes.forEach( e => {
          
          if(e === 'ROLE_ADMIN') {
              isHabilitado = true;
          }
      });
  }  
  return isHabilitado;
}

export default Route;
