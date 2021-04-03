import React from 'react';
import Row from './Row';
import TbHeader from './TbHeader';

import { Container, TBoby } from './styles';

interface ColunaProps {
    campos: string[];
    dados: string[][];
}

const Table: React.FC<ColunaProps> = ({dados, campos}) => {

  return (
    <Container >
      <table>
        <TbHeader campos={campos}/>
        <TBoby>       
           {dados.map((dado) => (
            <Row dados={dado} />
           ))}
        </TBoby>
      </table>

    </Container>
  );
};

export default Table;
