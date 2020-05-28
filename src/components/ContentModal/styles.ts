import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  background: ${Colors.WHITE};
  border-radius: 10px;
  padding: 5px 18px;
  margin-bottom: 5px;
  max-height: 320px;
`;

export const Content = styled.Text`
  color: ${Colors.DARK_GRAY};
  font-size: 15px;
  font-style: italic;
  margin: 10px 0;
`;

export const Separator = styled.View`
  border-top-width: 1px;
  border-top-color: ${Colors.LINE};
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  color: ${Colors.VIVID_BLUE};
  font-size: 13px;
`;
