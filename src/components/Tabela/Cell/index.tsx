import React from 'react';

import { TableCell } from './styles';

interface ColunaProps {
    name: string;
}

const Cell: React.FC<ColunaProps> = ({name}) => {

  return (
     <TableCell> {name} </TableCell>
  );
};

export default Cell;
