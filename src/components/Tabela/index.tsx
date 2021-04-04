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
        <TbHeader campos={campos}/>
        { 
          dados === undefined ? 
          <TBoby> 
            Nenhum Resultado encontrado 
          </TBoby> :  
          <TBoby>       
            {dados.map((dado) => (
              <Row dados={dado} />
            ))}
          </TBoby> 
        }
      </table>

    </Container>
  );
};

export default Table;
