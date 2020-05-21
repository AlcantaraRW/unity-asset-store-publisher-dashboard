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
import IPackage from '../../models/IPackage';
import getQuantitativeText from '../../utils/getQuantitativeText';

const Packages: React.FC = () => {
  const [packages, setPackages] = useState<IPackage[]>([]);

  useEffect(() => {
    async function loadPackages(): Promise<void> {
      const response = await api.get('management/packages.json');

      const transformedData = PackageResponseTransformer.transform(
        response.data,
      );

      setPackages(transformedData);
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
