import React from 'react';

import { THeader } from './styles';

interface ColunaProps {
    campos: string[];
}

const TbHeader: React.FC<ColunaProps> = ({campos}) => {

  return (
    <THeader key="idHTabela">
      <tr>
        {campos.map((coluna) => (
            <th key={coluna}>{coluna}</th>
          ))}
      </tr>
      </THeader>
  );
};

export default TbHeader;
