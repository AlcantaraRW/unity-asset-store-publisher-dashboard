import React, { useEffect, useState, useMemo } from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  Header,
  Title,
  ListContainer,
  ListSeparator,
} from './styles';

import Package from '../../components/Package';

import api from '../../services/api';
import PackageTransformer from '../../utils/PackageTransformer';

interface IPackage {
  package_id: string;
  name: string;
  size: number;
  created: Date;
  modified: Date;
  version_name: string;
  price: number;
  status: string;
  average_rating: number;
  short_url: string;
}

const Packages: React.FC = () => {
  const [packages, setPackages] = useState<IPackage[]>([]);

  useEffect(() => {
    async function loadPackages(): Promise<void> {
      const response = await api.get('management/packages.json');

      const transformedData = PackageTransformer.transform(response.data);

      setPackages(transformedData);
    }

    loadPackages();
  }, []);

  const numberOfPackages = useMemo(() => packages.length, [packages]);

  return (
    <Container>
      <Header>
        <Title>
          {`Published packages${
            numberOfPackages > 0 ? ` (${numberOfPackages})` : ''
          }`}
        </Title>
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
    </Container>
  );
};

export default Packages;
