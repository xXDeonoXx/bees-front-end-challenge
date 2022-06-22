import {
  ChartSquareBarIcon,
  LocationMarkerIcon,
  PhoneIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline';

import { TrashIcon } from '@heroicons/react/solid';
import { Brewery } from '../../../services/breweries/breweries.interface';
import CardChip from '../../atoms/CardChip';
import {
  BreweryAddress,
  BreweryTitle,
  ChipsContainer,
  Container,
  DeleteButtonWrapper,
} from './style';

interface BreweryCardProps {
  brewery: Brewery;
  removeBrewery: (id: string) => void;
}

const BreweryCard: React.FC<BreweryCardProps> = ({
  brewery,
  removeBrewery,
}) => {
  const address =
    brewery.street || brewery.address_2 || brewery.address_3 || undefined;
  return (
    <Container>
      <DeleteButtonWrapper
        onClick={() => {
          removeBrewery(brewery.id);
        }}
      >
        <TrashIcon />
      </DeleteButtonWrapper>
      <BreweryTitle>{brewery.name}</BreweryTitle>
      <BreweryAddress>
        {typeof address == 'string' ? address : ''}
        {brewery.state &&
          `${typeof address == 'string' ? ', ' : ''} ${brewery.state}`}
        {brewery.country && ` - ${brewery.country}`}
      </BreweryAddress>
      <ChipsContainer>
        <CardChip label={brewery.brewery_type} icon={<ChartSquareBarIcon />} />
        <CardChip label={brewery.postal_code} icon={<LocationMarkerIcon />} />
        <CardChip label={brewery.phone} icon={<PhoneIcon />} />
        <CardChip editable label={'add more'} icon={<PlusCircleIcon />} />
      </ChipsContainer>
    </Container>
  );
};

export default BreweryCard;
