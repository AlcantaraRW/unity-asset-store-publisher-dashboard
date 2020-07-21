import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const Container = styled.View`
  height: 25px;
  background-color: ${Colors.DANGER};
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  color: ${Colors.WHITE};
`;
