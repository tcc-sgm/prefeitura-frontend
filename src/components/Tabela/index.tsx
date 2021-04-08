import React from 'react';
import Row from './Row';
import TbHeader from './TbHeader';

import { Container, TBoby } from './styles';

interface ColunaProps {
    campos: string[];
    dados: string[][] | undefined;
}

const Table: React.FC<ColunaProps> = ({dados, campos}) => {

  return (
    <Container >
      <table>
        <TbHeader key="idTabela" campos={campos}/>
        { 
          dados === undefined ? 
          <TBoby key="idTBody"> 
            Nenhum Resultado encontrado 
          </TBoby> :  
          <TBoby key="idTBodyReg">       
            {dados.map((dado) => (
              <Row key={Date.now()} dados={dado} />
            ))}
          </TBoby> 
        }
      </table>

    </Container>
  );
};

export default Table;
