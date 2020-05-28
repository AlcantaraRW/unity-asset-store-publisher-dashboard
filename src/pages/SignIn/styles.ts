import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const Header = styled.View`
  background: ${Colors.LIGHT_GRAY};
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  background: ${Colors.VERY_LIGHT_GRAY};
  width: 65px;
  height: 65px;
  border-radius: 35px;
`;

export const AppName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 10px;
`;
