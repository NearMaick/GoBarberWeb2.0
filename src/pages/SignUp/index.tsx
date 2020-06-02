import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form action="">
        <h1>Faça seu cadastro</h1>

        <Input type="email" name="email" icon={FiUser} placeholder="Nome" />

        <Input type="email" name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          type="password"
          name="password"
          icon={FiLock}
          placeholder="Senha"
        />

        <Button>Cadastrar</Button>
      </form>

      <a href="#none">
        <FiArrowLeft /> Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
