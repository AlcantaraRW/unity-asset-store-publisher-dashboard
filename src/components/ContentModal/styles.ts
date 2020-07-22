import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
  padding: 5px 18px;
  margin-bottom: 5px;
  max-height: 320px;
`;

export const Content = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 15px;
  font-style: italic;
  margin: 10px 0;
`;

export const Separator = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.line};
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
