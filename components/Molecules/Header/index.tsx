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
        <span style={{ marginLeft: '20px' }}>Go back</span>
      </div>
      <span style={{ marginRight: '40px' }}>{user?.name}</span>
    </Container>
  );
};

export default Header;
