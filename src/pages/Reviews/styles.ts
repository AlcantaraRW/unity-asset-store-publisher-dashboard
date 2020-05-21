import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${Colors.LIGHT_GRAY};
`;

export const Header = styled.View.attrs({
  elevation: 3,
})`
  align-items: center;
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ListContainer = styled.View`
  flex: 1;
  margin: 0 15px;
`;