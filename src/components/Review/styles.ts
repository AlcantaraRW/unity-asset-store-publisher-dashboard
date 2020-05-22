import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  background: ${Colors.WHITE};
  border-radius: 10px;
  padding: 15px 18px;
  margin-bottom: 10px;
`;

export const Subject = styled.Text`
  color: ${Colors.VERY_DARK_GRAY};
  font-size: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Date = styled.Text`
  color: ${Colors.DARK_GRAY};
  font-size: 13px;
  margin-left: 5px;
`;

export const Content = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: ${Colors.DARK_GRAY};
  font-size: 15px;
  font-style: italic;
`;

export const Separator = styled.View`
  border-top-width: 1px;
  border-top-color: ${Colors.LINE};
  margin: 10px 0;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ButtonText = styled.Text`
  color: ${Colors.VIVID_BLUE};
  font-size: 13px;
`;
