import React from 'react';
import logoImg from '../../../assets/access-denied.png';

import { Container, Content, AnimationContainer, Background, Box, BoxText } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Content>
        <Background />
        <AnimationContainer>
            <Box>
              <BoxText>
                <h1>Recurso não encontrado</h1>
              </BoxText>
            </Box>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default NotFound;
