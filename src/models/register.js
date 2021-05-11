function cpfValidate(cpf) {
  if (cpf.length !== 11) {
    return { hasError: true, text: 'CPF deve possuir 11 digitos.' };
  }

  return { hasError: false, text: '' };
}

function passwordValidate(password) {
  if (password.length < 4 || password.length > 72) {
    return { hasError: true, text: 'Senha deve ter entre 4 e 72' };
  }

  return { hasError: false, text: '' };
}

module.exports = {
  cpfValidate,
  passwordValidate,
};
