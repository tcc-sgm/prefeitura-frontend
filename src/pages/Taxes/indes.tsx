import React, { useRef, useCallback } from 'react';
import { FaFileSignature, FaClipboardList } from 'react-icons/fa';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import Select from '../../components/Select';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Table from '../../components/Tabela';

interface SignInFormData {
  email: string;
  password: string;
}

const Taxes: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        inscricao: Yup.string().required('Protocolo obrigatório'),
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
              <h1>Consultar Imposto</h1>

              <Select name="Tipo Imposto" icon={FaClipboardList} options={['IPTU', 'ITR']} />

              <Input
                name="inscricao"
                icon={FaFileSignature}
                placeholder="Inscrição" />

              <Button type="submit">Cadastrar</Button>
            </Form>

            <Table dados={DADOS} campos={CAMPOS}/>
        </AnimationContainer>
      </Content>

      <Background />

    </Container>
  );
}

const CAMPOS = ["Inscrição", "Tipo", "Valor", "Ano", "Situação"];
const DADOS = [["12313133", "IPTU", "1350,00", "2020","EM ABERTO"], ["12313133", "IPTU", "1205,00", "2019", "EM ABERTO"], ["12313133", "IPTU", "1115,00", "2018", "PAGO"]];


export default Taxes;
