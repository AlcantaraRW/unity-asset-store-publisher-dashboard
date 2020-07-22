import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex-direction: row;
`;

export const StarIcon = styled(Icon).attrs(({ theme }) => ({
  color: theme.colors.highlight,
  size: 15,
}))``;
