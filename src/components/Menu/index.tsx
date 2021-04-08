import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

const Menu:  React.FC = ()=> {
    const { signOut } = useAuth();

    return (
    <Container>
        <nav>
            <ul>
                <li>
                    <NavLink to="/notices/view" 
                        activeClassName="cursor-pointer text-orange-400"> Noticias
                    </NavLink>
                </li>
                {permissoes() === true ?
                <li>
                    <NavLink to="/notices/add" 
                        activeClassName="cursor-pointer text-orange-400"> Cadastrar Noticias
                    </NavLink>
                </li>
                : ''
                }

                <li>
                    <NavLink to="/taxes" 
                        activeClassName="cursor-pointer text-orange-400"> Consultar Imposto
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/" onClick={async () => { await signOut() }} 
                        activeClassName="cursor-pointer text-orange-400"> Sair
                    </NavLink>
                </li>
                    
            </ul>
        </nav>
    </Container>
    )
}

 function permissoes(): boolean {
    const user = localStorage.getItem('@Prefeitura:user');
    let isHabilitado = false;
    if (user) {
        const { roles } = JSON.parse(user);
        const permissoes: Array<string> = roles;
        permissoes.forEach( e => {
            console.log(e);
            
            if(e === 'ROLE_ADMIN') {
                isHabilitado = true;
            }
        });
    }
    
    return isHabilitado;
}

export default Menu;