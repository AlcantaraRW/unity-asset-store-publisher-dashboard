import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  background: ${Colors.WHITE};
  border-radius: 10px;
  padding: 5px 18px;
  margin-bottom: 5px;
`;

export const Detail = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.LINE};
`;

export const Title = styled.Text`
  color: ${Colors.VERY_DARK_GRAY};
  font-size: 18px;
`;

export const Value = styled.Text`
  color: ${Colors.DARK_GRAY};
  font-size: 18px;
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
