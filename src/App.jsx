import React from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-nunito';

import RegisterForms from './components/registerForms';
import Validations from './contexts/validations';
import { cpfValidate, passwordValidate } from './models/register';

function App() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulario de cadastro
      </Typography>
      <Validations.Provider
        value={{ cpf: cpfValidate, password: passwordValidate }}
      >
        <RegisterForms onSubmit={onSubmit} />
      </Validations.Provider>
    </Container>
  );
}

export default App;
