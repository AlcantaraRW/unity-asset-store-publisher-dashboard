import React, { useEffect, useState, useMemo } from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  Header,
  Title,
  TotalEntries,
  ListContainer,
  ListSeparator,
} from './styles';

import Package from '../../components/Package';

import api from '../../services/api';
import PackageResponseTransformer from '../../utils/responseTransformers/PackageResponseTransformer';
import IPackage from '../../models/packages/IPackage';
import getQuantitativeText from '../../utils/getQuantitativeText';
import Center from '../../components/Center';
import Loader from '../../components/Loader';

const Packages: React.FC = () => {
  const [packages, setPackages] = useState<IPackage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPackages(): Promise<void> {
      const response = await api.get('management/packages.json');

      const transformedData = PackageResponseTransformer.transform(
        response.data,
      );

      setPackages(transformedData);
      setIsLoading(false);
    }

    loadPackages();
  }, []);

  const numberOfPackages = useMemo(() => packages.length, [packages]);

  return (
    <Container>
      <Header>
        <Title>Published packages</Title>
        {numberOfPackages > 0 && (
          <TotalEntries>
            {getQuantitativeText(numberOfPackages, 'package')}
          </TotalEntries>
        )}
      </Header>

      {isLoading ? (
        <Center>
          <Loader message="Loading packages..." />
        </Center>
      ) : (
        <ListContainer>
          <FlatList
            data={packages}
            keyExtractor={item => item.package_id}
            renderItem={({ item }) => <Package info={item} />}
            ItemSeparatorComponent={() => <ListSeparator />}
            showsVerticalScrollIndicator={false}
          />
        </ListContainer>
      )}
    </Container>
  );
};

export default Packages;
