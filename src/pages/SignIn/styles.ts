import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WebView from 'react-native-webview';

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  width: 65px;
  height: 65px;
  border-radius: 35px;
`;

export const AppIcon = styled(Icon).attrs(({ theme }) => ({
  color: theme.text.primary,
  name: 'cube-outline',
  size: 40,
}))``;

export const AppName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 10px;
  color: ${({ theme }) => theme.text.primary};
`;

export const AssetStoreWebView = styled(WebView).attrs({
  startInLoadingState: true,
})`
  background-color: ${({ theme }) => theme.colors.primary};
`;
