import React, { useEffect, useState } from 'react';

import { Container, Content, AnimationContainer, Background, Box, BoxText } from './styles';
import Header from '../../../components/Header';
import api from '../../../services/api';

interface INotice {
  titulo: string;
  conteudo: string;
  criacao: string;
  autor: string;
}


const Notice: React.FC = () => {
  const [items, setItems] = useState<INotice[]>([]);

  useEffect(() => {
    try {
      api.get('/noticias')
         .then((response) => {
             setItems(response.data);
      })
    } catch (err) {
      
    }
    return undefined;
  }, []);
  return (
    <Container>
      <Header/>
      <Content>
        <Background />
        <AnimationContainer>
          {items.map(element =>  (
            <Box>
              <BoxText>
                <h1>J{element.titulo}</h1>
                <h2>Autor: {element.autor}</h2>
                <h2>Data: {element.criacao.substring(8,10) + '-'+ 
                     element.criacao.substring(5,7) + '-'+
                     element.criacao.substring(0,4)}</h2>
                <h3>
                  {element.conteudo}
                </h3>
              </BoxText>
            </Box>

          ))}
          
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Notice;
