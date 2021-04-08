import React, { useRef, useCallback, useState } from 'react';
import { FaFileSignature, FaClipboardList } from 'react-icons/fa';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';

import Select from '../../components/Select';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErros';

import { Container, Content, AnimationContainer, Background } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Table from '../../components/Tabela';
import { findIPTU, findITR } from '../../services/citizens';

interface FindImpostoFormData {
  tipo_imposto: string;
  inscricao: string;
}

const Taxes: React.FC = () => {
  
  const [ dados, setDados ] = useState<Array<string[]> |undefined>(undefined);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: FindImpostoFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        inscricao: Yup.string().required('Protocolo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const inscricao = formRef.current?.getFieldValue('inscricao');
      const tipo = formRef.current?.getFieldValue('tipo_imposto');
      
      if (tipo === 'IPTU') {
        setDados(await findIPTU(inscricao));
      } else {
        setDados(await findITR(inscricao));
      }
      
    } catch (err) {

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return ;
      }
      addToast({
        type: 'error',
        title: 'Erro na Consulta',
        description: 'Ocorreu um erro ao fazer ao realizar a consulta'
      });

    }
  }, [ addToast ]);
  return (
    <Container>
      <Header/>
      <Content>
        <AnimationContainer>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Consultar Imposto</h1>

              <Select name="tipo_imposto" icon={FaClipboardList} options={['IPTU', 'ITR']} />

              <Input
                name="inscricao"
                icon={FaFileSignature}
                placeholder="Inscrição" />

              <Button type="submit">Consultar</Button>
            </Form>

            <Table dados={dados} campos={CAMPOS}/>
        </AnimationContainer>
      </Content>

      <Background />

    </Container>
  );
}

const CAMPOS = ["Inscrição", "Tipo", "Valor(R$)", "Ano", "Tamanho (mº2)",  "Cidade", "Estado", "CEP"];

export default Taxes;
