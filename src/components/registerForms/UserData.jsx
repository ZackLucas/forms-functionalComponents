/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { Button, TextField } from '@material-ui/core';

import registerValidations from '../../contexts/validations';
import useErrors from '../../hooks/useErrors';

function UserData({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validations = useContext(registerValidations);

  const [errors, validateFields, canSend] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSend()) onSubmit({ email, password });
      }}
    >
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="password"
        label="password"
        type="password"
        name="password"
        variant="outlined"
        margin="normal"
        onBlur={validateFields}
        error={errors.password.hasError}
        helperText={errors.password.text}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        fullWidth
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Continuar
      </Button>
    </form>
  );
}

UserData.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserData;
