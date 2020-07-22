import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
  padding: 15px 18px;
  margin-bottom: 5px;
`;

export const ListContainer = styled.View`
  max-height: 270px;
`;

export const Option = styled.TouchableOpacity``;

export const OptionText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.text.primary};
`;

export const Separator = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.line};
  margin: 12px 0;
`;

export const ListSeparator = styled(Separator)`
  margin: 12px 0;
`;

export const CancelButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const CancelButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 13px;
`;
