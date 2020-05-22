import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${Colors.LIGHT_GRAY};
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

export const PreviousMonthButton = styled.TouchableOpacity`
  padding-right: 15px;
`;

export const PickMonthButton = styled.TouchableOpacity``;

export const SelectedMonth = styled.Text`
  font-size: 20px;
  font-weight: bold;
  border-bottom-width: 2px;
`;

export const NextMonthButton = styled.TouchableOpacity`
  padding-left: 15px;
`;

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
  background-color: ${Colors.VERY_LIGHT_GRAY};
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Quantity = styled.Text`
  color: ${Colors.VERY_DARK_GRAY};
  font-size: 20px;
`;

export const Currencies = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const Gross = styled.Text`
  color: ${Colors.DARK_GRAY};
  font-size: 18px;
  margin-right: 5px;
`;

export const Net = styled.Text`
  color: ${Colors.VERY_DARK_GRAY};
  font-size: 20px;
  font-weight: bold;
`;
