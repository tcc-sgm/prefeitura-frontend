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
      api.get('/noticias')
         .then((response) => {
             setItems(response.data);
      }).catch(err =>{
        console.log('Noticia não encontrada')
      }) 

    return undefined;
  }, []);
  return (
    <Container>
      <Header/>
      <Content>
        <Background />
        <AnimationContainer>
          {items == null ? <h1>Nenhuma notícia cadastrada</h1> :items.map(element =>  (
            <Box key={element.titulo+element.criacao}>
              <BoxText key={element.titulo+element.criacao}>
                <h1>{element.titulo}</h1>
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
