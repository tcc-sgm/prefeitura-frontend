import React from 'react';
import Cell from '../Cell';
import { TableRow } from './styles';

interface ColunaProps {
    dados: string[];
}

const Row: React.FC<ColunaProps> = ({dados}) => {

  return (
      <TableRow >
        {dados.map((dado) => (
              <Cell name={dado} />
        ))}
      </TableRow>
  );
};

export default Row;
