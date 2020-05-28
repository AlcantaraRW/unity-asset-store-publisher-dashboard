import React from 'react';
import { ScrollView } from 'react-native';

import { Container, Content, Separator, Button, ButtonText } from './styles';

interface IContentModalProps {
  content: string;
  onButtonPressed(): void;
}

const ContentModal: React.FC<IContentModalProps> = ({
  content,
  onButtonPressed,
}) => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Content>{content}</Content>
      </ScrollView>
      <Separator />
      <Button onPress={onButtonPressed}>
        <ButtonText>CLOSE</ButtonText>
      </Button>
    </Container>
  );
};

export default ContentModal;
