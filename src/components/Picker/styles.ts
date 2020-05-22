import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  background: ${Colors.WHITE};
  border-radius: 10px;
  padding: 15px 18px;
  margin-bottom: 5px;
`;

export const ListContainer = styled.View`
  max-height: 270px;
`;

export const Option = styled.TouchableOpacity``;

export const OptionText = styled.Text`
  font-size: 18px;
`;

export const Separator = styled.View`
  border-top-width: 1px;
  border-top-color: ${Colors.LINE};
  margin: 12px 0;
`;

export const ListSeparator = styled(Separator)`
  margin: 12px 0;
`;

export const CancelButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const CancelButtonText = styled.Text`
  color: ${Colors.VIVID_BLUE};
  font-size: 12px;
`;
