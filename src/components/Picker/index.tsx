import React from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  ListContainer,
  Option,
  OptionText,
  ListSeparator,
  Separator,
  CancelButton,
  CancelButtonText,
} from './styles';
import IKeyValuePair from '../../models/IKeyValuePair';

interface IPickerProps {
  items: IKeyValuePair[];
  onItemClicked(item: IKeyValuePair): void;
  onCancelClicked(): void;
}

const Picker: React.FC<IPickerProps> = ({
  items,
  onItemClicked,
  onCancelClicked,
}) => {
  // const items = [
  //   { title: '2020 September', value: '202009' },
  //   { title: '2020 October', value: '202010' },
  //   { title: '2020 November', value: '202011' },
  // ];

  return (
    <Container>
      <ListContainer>
        <FlatList
          data={items}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <Option key={item.key} onPress={() => onItemClicked(item)}>
              <OptionText>{item.key}</OptionText>
            </Option>
          )}
          ItemSeparatorComponent={() => <ListSeparator />}
          showsVerticalScrollIndicator={false}
        />
      </ListContainer>

      <Separator />

      <CancelButton onPress={onCancelClicked}>
        <CancelButtonText>CANCEL</CancelButtonText>
      </CancelButton>
    </Container>
  );
};

export default Picker;
