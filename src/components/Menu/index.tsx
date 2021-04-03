import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from './styles';

const Menu = () => (
        <Container>
            <nav>
                <ul>

                    <li>
                        <NavLink to="/protocolos/consulta" 
                            activeClassName="cursor-pointer text-orange-400"> Consultar serviço
                        </NavLink>
                    </li>
                        
                    <li>
                        <NavLink to="/protocolos/cadastro" 
                            activeClassName="cursor-pointer text-orange-400"> Solicitar serviço
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/taxes" 
                            activeClassName="cursor-pointer text-orange-400"> Consultar Imposto
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/" 
                            activeClassName="cursor-pointer text-orange-400"> Sair
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
        </Container>
);

export default Menu;