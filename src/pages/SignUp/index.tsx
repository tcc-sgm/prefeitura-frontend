import React, { useCallback, useRef } from 'react';
import { FiUser, FiMail, FiLock, FiPhoneCall, FiUserCheck } from 'react-icons/fi';
import { HiOutlineIdentification} from 'react-icons/hi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErros';
import Input from '../../components/Input';
import Button from '../../components/Button';
import auth from '../../services/auth';
import { useToast } from '../../hooks/toast';
import { Container, Content, AnimationContainer, Background } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  username: string;
  documento: string;
  telefone: string;
}

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history =  useHistory();

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
        password: Yup.string().min(6, 'No minimo 6 dígitos'),
        telefone: Yup.string().required('Telefone obrigatório'),
        username: Yup.string().required('Usuário obrigatório'),
        documento: Yup.string().required('CPF obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await auth.post('/users/signup', {
        name: data.name,
        username: data.username,
        cpf: data.documento,
        phone: data.telefone,
        email: data.email,
        password: data.password,
        roles: ["ROLE_CITIZEN"],
      });

      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description: 'Você já pode fazer seu logon'
      });
      history.push('/');

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return ;
      }
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer cadastro, tente novamente'
      });
    }
  }, [addToast, history]);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>

          <Form ref={formRef} onSubmit={handleSubmit} >
            <h1>Faça seu Cadastro</h1>
            <Input
              name="name"
              icon={FiUser}
              placeholder="Nome" />
            
            <Input
              name="username"
              icon={FiUserCheck}
              placeholder="Usuário" />

            <Input
              name="email"
              icon={FiMail}
              placeholder="E-mail" />

            <Input
              name="documento"
              icon={HiOutlineIdentification}
              placeholder="CPF" />
         
            <Input
              name="telefone"
              icon={FiPhoneCall}
              placeholder="Telefone" />
            
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha" />

            <Button type="submit">Cadastrar</Button>
            
          </Form>

          <Link to="/">
            Retornar para tela Login
          </Link>
        </AnimationContainer>
      </Content>

    </Container>
  );
}

export default SignUp;
