import { useRouter } from 'next/router';
import React from 'react';
import { useUser } from '../../../providers/User';
import { Container } from './style';

const GoBackButton = () => {
  const router = useRouter();
  const { setName } = useUser();

  return (
    <Container
      onClick={() => {
        setName('');
        router.back();
      }}
    >
      <img src='images/go-back-button.svg' alt='' />
    </Container>
  );
};

export default GoBackButton;
