/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Button, TextField, Switch, FormControlLabel,
} from '@material-ui/core';

import registerValidations from '../../contexts/validations';
import useErrors from '../../hooks/useErrors';

function PersonalData({ onSubmit }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [CPF, setCPF] = useState('');
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(false);

  const validations = useContext(registerValidations);

  const [errors, validateFields, canSend] = useErrors(validations);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canSend()) {
          onSubmit({
            name,
            surname,
            CPF,
            promotions,
            news,
          });
        }
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
        name="cpf"
        variant="outlined"
        fullWidth
        margin="normal"
        error={errors.cpf.hasError}
        helperText={errors.cpf.text}
        value={CPF}
        onChange={(e) => {
          setCPF(e.target.value);
        }}
        onBlur={validateFields}
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
        Continuar
      </Button>
    </form>
  );
}

PersonalData.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PersonalData;
