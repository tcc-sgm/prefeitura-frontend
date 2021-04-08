import React, { useRef, useCallback } from 'react';
import { FaFileSignature } from 'react-icons/fa';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { useToast } from '../../../hooks/toast';

import TextArea from '../../../components/TextArea';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';
import Header from '../../../components/Header';
import getValidationErrors from '../../../utils/getValidationErros';
import api from '../../../services/api';

interface NoticeFormData {
  titulo: string;
  descricao: string;
}

const AddNotice: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: NoticeFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        descricao: Yup.string().required('Descrição obrigatório'),
        titulo: Yup.string().required('Titulo é obrigatório')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/noticias', {
        titulo: data.titulo,
        conteudo: data.descricao,
      });

      history.push('/notices/view')
    } catch (err) {
      
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return ;
      }
      
      addToast({
        type: 'error',
        title: 'Erro ao cadastrar',
        description: 'Ocorreu um erro ao fazer ao realizar o cadastro'
      });

    }
  }, [ addToast, history ]);
  return (
    <Container>
      <Header/>
      <Content>
        <AnimationContainer>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Notícia</h1>

              <Input
                name="titulo"
                icon={FaFileSignature}
                placeholder="Titulo" />

              <TextArea
                name="descricao"
                icon={FaFileSignature}
                placeholder="Descreva aqui a noticia." />

              <Button type="submit">Cadastrar</Button>
            </Form>
     
        </AnimationContainer>
      </Content>

      <Background />

    </Container>
  );
}

export default AddNotice;
