import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
  padding: 5px 18px;
  margin-bottom: 5px;
`;

export const Detail = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 13px;
`;
