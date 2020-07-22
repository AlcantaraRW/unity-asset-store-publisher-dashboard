import styled from 'styled-components/native';
import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-color: ${({ theme }) => theme.text.primary};
`;

export const PublisherName = styled.Text`
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.text.primary};
`;

export const Separator = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.line};
  margin: 15px 0;
`;

export const DrawerOption = styled(DrawerItem).attrs(
  ({ theme: { colors, text } }) => ({
    activeBackgroundColor: colors.primary,
    activeTintColor: text.primary,
    inactiveTintColor: text.primary,
    labelStyle: {
      fontSize: 16,
      marginHorizontal: -20,
    },
  }),
)``;

const DrawerOptionIcon = styled(Icon).attrs(({ theme }) => ({
  size: 25,
  color: theme.text.primary,
}))``;

export const SwitchThemeIcon = styled(DrawerOptionIcon).attrs({
  name: 'theme-light-dark',
})``;

export const LogoutIcon = styled(DrawerOptionIcon).attrs({
  name: 'logout',
})``;
