import React from 'react';

import Avatar from '../../Avatar';
import {
  Container,
  RigthWrapper,
  MessageCard,
  Message,
  Name,
  CreatedAt,
} from './styles';

const CommentCell = ({ comment }) => {
  const { user, message, created_at: createdAt } = comment;

  return (
    <Container>
      <Avatar source={{ uri: user.avatar }} iconSize={24} size={40} />

      <RigthWrapper>
        <MessageCard>
          <Name>{user.name}</Name>

          <Message>
            {message}
          </Message>
        </MessageCard>

        <CreatedAt>{createdAt}</CreatedAt>
      </RigthWrapper>
    </Container>
  );
};

export default CommentCell;
