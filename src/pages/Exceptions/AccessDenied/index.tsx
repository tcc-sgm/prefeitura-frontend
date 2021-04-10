import React from 'react';
import logoImg from '../../../assets/access-denied.png';

import { Container, Content, AnimationContainer, Background, Box, BoxText } from './styles';

const AccessDenied: React.FC = () => {
  return (
    <Container>
      <Content>
        <Background />
        <AnimationContainer>
            <Box>
              <BoxText>
                <h1>Acesso Negado</h1>
                <img src={logoImg} />
              </BoxText>
            </Box>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default AccessDenied;
