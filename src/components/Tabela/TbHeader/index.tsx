import React from 'react';

import { THeader } from './styles';

interface ColunaProps {
    campos: string[];
}

const TbHeader: React.FC<ColunaProps> = ({campos}) => {

  return (
    <THeader>
      <tr>
        {campos.map((coluna) => (
            <th>{coluna}</th>
          ))}
      </tr>
      </THeader>
  );
};

export default TbHeader;
