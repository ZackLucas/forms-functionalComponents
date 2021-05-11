import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TextField, Button } from '@material-ui/core';

function DeliveryData({ onSubmit }) {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({
          cep,
          address,
          number,
          state,
          city,
        });
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        value={cep}
        onChange={(e) => {
          setCep(e.target.value);
        }}
      />
      <TextField
        id="adress"
        label="Endereço"
        type="adress"
        variant="outlined"
        margin="normal"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        fullWidth
      />
      <TextField
        id="number"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <TextField
        id="state"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <TextField
        id="city"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />

      <Button variant="contained" color="primary" type="submit" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

DeliveryData.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DeliveryData;
