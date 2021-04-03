import React, { useRef, useCallback } from 'react';
import { FaFileSignature } from 'react-icons/fa';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { useToast } from '../../../hooks/toast';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';
import Header from '../../../components/Header';
import Table from '../../../components/Tabela';

interface SignInFormData {
  email: string;
  password: string;
}

const SearchProtocol: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        protocolo: Yup.string().required('Protocolo obrigatório'),
      });


      await schema.validate(data, {
        abortEarly: false,
      });

      history.push('/dashboard')
    } catch (err) {

      addToast({
        type: 'error',
        title: 'Erro na Consulta',
        description: 'Ocorreu um erro ao fazer ao realizar a consulta'
      });
    }
  }, [ addToast, history ]);
  return (
    <Container>
      <Header/>
      <Content>
        <AnimationContainer>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Consultar Protocolo</h1>

              <Input
                name="protocolo"
                icon={FaFileSignature}
                placeholder="Protocolo" />

              <Button type="submit">Consultar</Button>
            </Form>
            <Table dados={DADOS} campos={CAMPOS}/>
     
        </AnimationContainer>
      </Content>

      <Background />

    </Container>
  );
}

const CAMPOS = ["Protocolo", "Servico", "Descrição", "Situação"];
const DADOS = [["123123132", "Poda Arvore", "Rua 15 ao lado mercearia","EM ATENDIMENTO"], ["4444444444", "Buraco(s)", "em frente posto policial", "ABERTO"], ["d1f231dsf321dsf231df2d3s1f2s3df1", "Buraco(s)", "Rua 18", "FINALIZADO"]];

export default SearchProtocol;
