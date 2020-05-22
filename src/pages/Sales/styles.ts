import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${Colors.LIGHT_GRAY};
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
  margin: 0 15px 100px;
`;
