import React from 'react';

function notValidate() {
  console.log('Sem validação');
  return { hasError: false, text: '' };
}

const RegisterValidations = React.createContext({
  cpf: notValidate,
  password: notValidate,
});

export default RegisterValidations;
