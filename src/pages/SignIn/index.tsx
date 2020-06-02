import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form action="">
        <h1>Faça seu logon</h1>

        <Input type="email" name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          type="password"
          name="password"
          icon={FiLock}
          placeholder="Senha"
        />

        <Button>Entrar</Button>

        <a href="#none">Esqueci minha senha</a>
      </form>

      <a href="#none">
        <FiLogIn /> Criar Conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
