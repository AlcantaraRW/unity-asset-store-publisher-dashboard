import styled from 'styled-components/native';

export const Container = styled.View`
  height: 25px;
  background-color: ${({ theme }) => theme.colors.danger};
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;
