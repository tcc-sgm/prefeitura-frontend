import React, { useRef, useCallback } from 'react';
import { FiLock, FiUserCheck } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

interface SignInFormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('Usuário obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      await signIn({
        username: data.username,
        password: data.password
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
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais'
      });

    }
  }, [ signIn, addToast, history ]);
  return (
    <Container>

      <Content>
        <AnimationContainer>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Prefeitura Municipal</h1>

              <Input
                name="username"
                icon={FiUserCheck}
                placeholder="Usuário" />

              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha" />

              <Button type="submit">Acessar</Button>
            </Form>
            <Link to="/signup">
              Cadastre-se
          </Link>
        </AnimationContainer>
      </Content>

      <Background />

    </Container>
  );
}

export default SignIn;
