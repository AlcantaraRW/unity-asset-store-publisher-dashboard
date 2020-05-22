import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px;
  margin-bottom: 10px;
  background-color: ${Colors.LIGHT_GRAY};
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-color: ${Colors.VERY_DARK_GRAY};
`;

export const PublisherName = styled.Text`
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Separator = styled.View`
  border-top-width: 1px;
  border-top-color: ${Colors.LINE};
  margin: 15px 0;
`;
