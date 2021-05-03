import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button, TextField, Switch, FormControlLabel,
} from '@material-ui/core';

function RegisterForms({ onSubmit, cpfValidate }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [CPF, setCPF] = useState('');
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(false);
  const [errors, setErrors] = useState({
    cpf: {
      hasError: false,
      text: '',
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          name, surname, CPF, promotions, news,
        });
      }}
    >
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextField
        id="surname"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={surname}
        onChange={(e) => {
          setSurname(e.target.value);
        }}
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        error={errors.cpf.hasError}
        helperText={errors.cpf.text}
        value={CPF}
        onChange={(e) => {
          setCPF(e.target.value);
        }}
        onBlur={(e) => {
          const errorObj = cpfValidate(e.target.value);
          setErrors({ cpf: errorObj });
        }}
      />

      <FormControlLabel
        label="Promoções"
        control={(
          <Switch
            name="promotions"
            checked={promotions}
            onChange={(e) => {
              setPromotions(e.target.checked);
            }}
            color="primary"
          />
        )}
      />
      <FormControlLabel
        label="Novidades"
        control={(
          <Switch
            name="news"
            checked={news}
            onChange={(e) => {
              setNews(e.target.checked);
            }}
            color="primary"
          />
        )}
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

RegisterForms.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  cpfValidate: PropTypes.func.isRequired,
};

export default RegisterForms;
