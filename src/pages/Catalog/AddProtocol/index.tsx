import React, { useRef, useCallback } from 'react';
import { FaFileSignature, FaClipboardList } from 'react-icons/fa';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { useToast } from '../../../hooks/toast';

import TextArea from '../../../components/TextArea';
import Select from '../../../components/Select';
import Button from '../../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';
import Header from '../../../components/Header';

interface SignInFormData {
  email: string;
  password: string;
}

const AddProtocol: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        descricao: Yup.string().required('Descrição obrigatório'),
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
              <h1>Solicitar Serviços</h1>

              <Select name="Tipo serviço" icon={FaClipboardList} options={['Poda de árvore(s)','Burraco(s)','Reparo calçada(s)', 'Bueiro(s) entupido']} />

              <TextArea
                name="descricao"
                icon={FaFileSignature}
                placeholder="Descreva aqui o que deseja solicitar ..." />

              <Button type="submit">Cadastrar</Button>
            </Form>
     
        </AnimationContainer>
      </Content>

      <Background />

    </Container>
  );
}

export default AddProtocol;
