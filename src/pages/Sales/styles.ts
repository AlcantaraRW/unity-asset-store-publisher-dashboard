import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IAdjacentMonthButtonProps {
  shouldHideButton: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
`;

export const Header = styled.View.attrs({
  elevation: 3,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const PreviousMonthButton = styled.TouchableOpacity<
  IAdjacentMonthButtonProps
>`
  padding-right: 15px;

  ${props =>
    props.shouldHideButton &&
    css`
      opacity: 0;
    `}
`;

const SelectMonthIcon = styled(Icon).attrs(({ theme }) => ({
  size: 25,
  color: theme.text.primary,
}))``;

export const PreviousMonthIcon = styled(SelectMonthIcon).attrs({
  name: 'chevron-left',
})``;

export const PickMonthButton = styled.TouchableOpacity``;

export const SelectedMonth = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
  border-bottom-color: ${({ theme }) => theme.text.primary};
  border-bottom-width: 2px;
`;

export const NextMonthButton = styled.TouchableOpacity<
  IAdjacentMonthButtonProps
>`
  padding-left: 15px;

  ${props =>
    props.shouldHideButton &&
    css`
      opacity: 0;
    `}
`;

export const NextMonthIcon = styled(SelectMonthIcon).attrs({
  name: 'chevron-right',
})``;

export const ListContainer = styled.View`
  margin: 0 15px 108px;
`;

export const ListSeparator = styled.View`
  height: 5px;
`;

export const Footer = styled.View`
  flex-direction: row;
  margin-top: 200px;
  justify-content: space-between;
  padding: 13px 20px;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 20px;
`;

export const Currencies = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const Gross = styled.Text`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 18px;
  margin-right: 5px;
`;

export const Net = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 20px;
  font-weight: bold;
`;
