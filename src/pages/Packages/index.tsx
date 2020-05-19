import React from 'react';
import { View, FlatList } from 'react-native';

import {
  Container,
  Header,
  Title,
  Footer,
  Totals,
  ListContainer,
  ListSeparator,
} from './styles';

import Package from '../../components/Package';

interface IPackage {
  package_id: string;
  name: string;
  size: number;
  created: Date;
  modified: Date;
  version_name: string;
  price: number;
  status: string;
}

const Packages: React.FC = () => {
  const packages: IPackage[] = [
    {
      package_id: '96896',
      name: 'Easy Leaderboard (Facebook + PlayFab)',
      size: '1166495',
      created: new Date(2020, 4, 7),
      modified: new Date(2020, 4, 8),
      version_name: '2.0.3',
      price: '12.00',
      status: 'published',
    },
    {
      package_id: '136568',
      name: 'Easy Advertise (Google AdMob)',
      size: '1166495',
      created: new Date(2020, 2, 10),
      modified: new Date(2020, 2, 13),
      version_name: '1.0.0',
      price: '8.00',
      status: 'published',
    },
    {
      package_id: '96896x',
      name: 'Easy Leaderboard (Facebook + PlayFab)',
      size: '1166495',
      created: new Date(2020, 4, 7),
      modified: new Date(2020, 4, 8),
      version_name: '2.0.3',
      price: '12.00',
      status: 'published',
    },
    {
      package_id: '136568x',
      name: 'Easy Advertise (Google AdMob)',
      size: '1166495',
      created: new Date(2020, 2, 10),
      modified: new Date(2020, 2, 13),
      version_name: '1.0.0',
      price: '8.00',
      status: 'published',
    },
  ];

  return (
    <Container>
      <Header>
        <Title>Published packages</Title>
      </Header>

      <ListContainer>
        <FlatList
          data={packages}
          keyExtractor={item => item.package_id}
          renderItem={({ item }) => <Package info={item} />}
          ItemSeparatorComponent={() => <ListSeparator />}
          showsVerticalScrollIndicator={false}
        />
      </ListContainer>

      <Footer>
        <Totals>2 published packages</Totals>
      </Footer>
    </Container>
  );
};

export default Packages;
