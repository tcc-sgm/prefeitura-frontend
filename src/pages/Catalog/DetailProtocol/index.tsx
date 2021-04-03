import React, { useRef, useCallback } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import { useToast } from '../../../hooks/toast';

import OutPut from '../../../components/OutPut';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import Table from '../../../components/Tabela';

import { Container, Content, AnimationContainer, Background, ContainerUpdate } from './styles';
import Header from '../../../components/Header';

interface SignInFormData {
  email: string;
  password: string;
}

const DetailProtocol: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      history.push('/dashboard')
    } catch (err) {

    }
  }, [ addToast, history ]);
  return (
    <Container>
      <Header/>
      <Content>
        <AnimationContainer>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Detalhamento do protocolo</h1>

              <OutPut label="Protocolo:" value="Teste00" />
              
              <OutPut label="Serviço:" value="Teste1" />
              
              <OutPut label="Descrição:" value="Teste2" />
              
              <OutPut label="Solicitante:" value="Teste3" />
              
              <ContainerUpdate>
                <Select name="Situação" options={['EM ABERTO', 'EM ATENDIMENTO','FINALIZADA','CANCELADA']} />
                <Button type="submit">Atualizar situação</Button>
              </ContainerUpdate>
            
            </Form>
            <h1>Histórico</h1>
            <Table dados={DADOS} campos={CAMPOS}/>

        </AnimationContainer>
      </Content>

      <Background />

    </Container>
  );
}

const CAMPOS = ["Data", "Situação", "Responsável"];
const DADOS = [["12/14/2020", "EM ATENDIMENTO", "JOSÉ"], ["12/14/2020", "FINALIZADA", "MARIA"]];


export default DetailProtocol;
