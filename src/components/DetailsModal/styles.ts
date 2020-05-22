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

export const Detail = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${Colors.VERY_DARK_GRAY};
  font-size: 18px;
`;

export const Value = styled.Text`
  color: ${Colors.DARK_GRAY};
  font-size: 18px;
`;

export const Separator = styled.View`
  border-top-width: 1px;
  border-top-color: ${Colors.LINE};
  margin: 12px 0;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${Colors.VIVID_BLUE};
  font-size: 12px;
`;
