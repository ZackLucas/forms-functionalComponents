import React from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-nunito';

import RegisterForms from './components/registerForms';

function App() {
  const onSubmit = (data) => {
    console.log(data);
  };

  const cpfValidate = (cpf) => {
    if (cpf.length !== 11) {
      return { hasError: true, text: 'CPF deve possuir 11 digitos.' };
    }

    return { hasError: false, text: '' };
  };

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulario de cadastro
      </Typography>
      <RegisterForms onSubmit={onSubmit} cpfValidate={cpfValidate} />
    </Container>
  );
}

export default App;
