import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
  padding: 15px 18px;
  margin-bottom: 10px;
`;

export const Subject = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 13px;
  margin-left: 5px;
`;

export const Content = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 15px;
  font-style: italic;
`;

export const Separator = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.line};
  margin: 10px 0;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 13px;
`;
