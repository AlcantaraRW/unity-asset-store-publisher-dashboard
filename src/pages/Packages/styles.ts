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
  margin: 0 15px 100px;
`;

export const ListSeparator = styled.View`
  height: 5px;
`;

export const Footer = styled.View`
  border-top-width: 1px;
  border-top-color: ${Colors.LINE};
  background: #e5e5e5;
  padding: 10px;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Totals = styled.Text`
  font-size: 16px;
`;
