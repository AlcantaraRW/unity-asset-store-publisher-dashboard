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

export const SelectedMonth = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const NextMonthButton = styled.TouchableOpacity`
  padding-left: 15px;
`;
