import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  background: ${({ theme }) => theme.colors.primaryLight};
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
  align-items: center;
`;

export const Version = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
`;

export const Separator = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.line};
  margin: 15px 0;
`;

export const ButtonsContainer = styled(Row)`
  margin-top: 0;
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
