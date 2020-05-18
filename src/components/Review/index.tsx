import React from 'react';

import {
  Container,
  Subject,
  Row,
  Date,
  Content,
  Separator,
  Button,
  ButtonText,
} from './styles';

import Rate from '../Rate';

const Review: React.FC = () => {
  return (
    <Container>
      <Subject>Saved us weeks of work</Subject>
      <Row>
        <Rate value={4} />
        <Date>May 7, 2020</Date>
      </Row>
      <Content>
        This asset saved my team at least 1-2 weeks of work, setting up Playfab
        Facebook APIs and designing a leaderboard. We would normally do this
        from scratch, but we had a tight deadline and so decided to buy an asset
        instead - it was one of the best investments we made in the whole
        project. \n\nThe assets provided are very simple in terms of appearance,
        which makes it very easy to make modifications to match your game's
        existing aesthetic. \n\nThe heart of the 5 star rating I'm giving it
        though is how responsive, helpful, and polite the creator has been.
      </Content>
      <Separator />
      <Button>
        <ButtonText>VIEW REVIEW</ButtonText>
      </Button>
    </Container>
  );
};

export default Review;
