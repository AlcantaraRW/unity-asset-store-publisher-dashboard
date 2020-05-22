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
  onItemClicked(item: IKeyValuePair): void;
  onCancelClicked(): void;
}

const Picker: React.FC<IPickerProps> = ({
  items,
  onItemClicked,
  onCancelClicked,
}) => {
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
