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

                <li>
                    <NavLink to="/notices/add" 
                        activeClassName="cursor-pointer text-orange-400"> Cadastrar Noticias
                    </NavLink>
                </li>

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

export default Menu;