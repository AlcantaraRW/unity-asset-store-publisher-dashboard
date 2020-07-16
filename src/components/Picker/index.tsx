import React from 'react';
import { FlatList } from 'react-native';
import IKeyValuePair from '../../models/IKeyValuePair';

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

interface IPickerProps {
  items: IKeyValuePair[];
  onItemPressed(item: IKeyValuePair): void;
  onCancelPressed(): void;
}

const Picker: React.FC<IPickerProps> = ({
  items,
  onItemPressed,
  onCancelPressed,
}) => {
  return (
    <Container>
      <ListContainer>
        <FlatList
          data={items}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <Option key={item.key} onPress={() => onItemPressed(item)}>
              <OptionText>{item.key}</OptionText>
            </Option>
          )}
          ItemSeparatorComponent={() => <ListSeparator />}
          showsVerticalScrollIndicator={false}
        />
      </ListContainer>

      <Separator />

      <CancelButton onPress={onCancelPressed}>
        <CancelButtonText>CANCEL</CancelButtonText>
      </CancelButton>
    </Container>
  );
};

export default Picker;
