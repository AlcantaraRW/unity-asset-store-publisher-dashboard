import styled from 'styled-components/native';

export const Container = styled.View``;

export const Spinner = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.highlight,
  size: 40,
}))``;

export const Message = styled.Text`
  text-align: center;
  font-size: 18px;
  font-style: italic;
  color: ${({ theme }) => theme.text.primary};
`;
