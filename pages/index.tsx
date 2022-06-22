import type { NextPage } from 'next';
import { Container, LogoContainer } from '../components/layout/Home/style';

import LoginForm from '../components/Molecules/LoginForm';

const Home: NextPage = () => {
  return (
    <Container>
      <LoginForm />
      <LogoContainer>
        <img src='images/bee-logo.svg' alt='Bee Logo' />
      </LogoContainer>
    </Container>
  );
};

export default Home;
