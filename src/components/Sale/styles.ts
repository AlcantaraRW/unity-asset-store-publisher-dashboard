import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
  padding: 15px 18px;
  margin-bottom: 5px;
`;

export const PackageName = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 20px;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-weight: bold;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
`;

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
`;

export const Currencies = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const Gross = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 16px;
  margin-right: 5px;
`;

export const Net = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-weight: bold;
`;

export const Separator = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.line};
  margin: 15px 0;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 13px;
`;
