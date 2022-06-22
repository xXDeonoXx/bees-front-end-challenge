import React from 'react';
import { useUser } from '../../../providers/User';
import GoBackButton from '../../atoms/GoBackButton';
import { Container } from './styles';

const Header = () => {
  const { user } = useUser();

  return (
    <Container>
      <div>
        <GoBackButton />
        <span>Go back</span>
      </div>
      <span>{user?.name}</span>
    </Container>
  );
};

export default Header;
