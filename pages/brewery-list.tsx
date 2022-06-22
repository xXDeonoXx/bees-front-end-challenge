import type { NextPage } from 'next';
import { useState } from 'react';
import { Container } from '../components/layout/BreweryList/style';
import Header from '../components/Molecules/Header';
import BreweryCard from '../components/Organisms/BreweryCard';
import { getApi } from '../services/api';
import { Brewery } from '../services/breweries/breweries.interface';

interface BreweryListPageProps {
  breweries: Brewery[];
}

const BreweryListPage: NextPage<BreweryListPageProps> = ({ breweries }) => {
  const [breweriesState, setBreweriesState] = useState(breweries);

  return (
    <Container>
      <Header />
    </Container>
  );
};

export default BreweryListPage;

export async function getServerSideProps() {
  const api = getApi();
  const response = await api.get<Brewery[]>('/breweries');
  return {
    props: { breweries: response.data }, // will be passed to the page component as props
  };
}
