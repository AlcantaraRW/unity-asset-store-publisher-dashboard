import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View.attrs({
  elevation: 3,
})`
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.text.primary};
`;

export const TotalEntries = styled.Text`
  font-size: 15px;
  text-align: center;
  color: ${({ theme }) => theme.text.primary};
`;

export const ListContainer = styled.View`
  flex: 1;
  margin: 0 15px;
`;
