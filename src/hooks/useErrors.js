/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function useErrors(validations) {
  function createInitialState() {
    const initialState = {};
    for (const field in validations) {
      initialState[field] = { hasError: false, text: '' };
    }

    return initialState;
  }

  const initialState = createInitialState();
  const [errors, setErrors] = useState(initialState);

  function validateFields(event) {
    const { name: eventName, value } = event.target;
    const hasError = validations[eventName](value);
    const newState = { ...errors };
    newState[eventName] = hasError;
    setErrors(newState);
  }

  function verifyFields(field) {
    if (errors[field].hasError) {
      return false;
    }

    return true;
  }

  function canSend() {
    for (const field in errors) {
      return verifyFields(field);
    }

    return false;
  }

  return [errors, validateFields, canSend];
}

export default useErrors;
