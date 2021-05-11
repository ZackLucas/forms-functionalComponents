import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Step, StepLabel, Stepper, Typography,
} from '@material-ui/core';
import PersonalData from './PersonalData';
import UserData from './UserData';
import DeliveryData from './DeliveryData';

function RegisterForms({ onSubmit }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setData] = useState({});

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  function collectData(data) {
    setData({ ...collectedData, ...data });
    nextStep();
  }

  const forms = [
    <UserData onSubmit={collectData} />,
    <PersonalData onSubmit={collectData} />,
    <DeliveryData onSubmit={collectData} />,
    <Typography variant="h5" align="center">Obrigado pelo Cadastro</Typography>,
  ];

  useEffect(() => {
    if (currentStep === forms.length - 1) {
      onSubmit(collectedData);
    }
  });

  return (
    <>
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {forms[currentStep]}
    </>
  );
}

RegisterForms.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForms;
