import React from 'react';

// APIs
import { deleteComment } from '../../../apis/comments';

// CUSTOM IMPORTS
import Loader from '../../Loaders/CommentLoader';
import Options from './Options';
import { colors } from '../../../styles';
import Avatar from '../../Avatar';
import {
  Wrapper,
  Container,
  RigthWrapper,
  MessageCard,
  Message,
  Name,
  CreatedAt,
} from './styles';

const CommentCell = ({ comment }) => {
  const {
    user, message, created_at: createdAt, owner,
  } = comment;

  // STATES
  const [showOptions, setShowOptions] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);

  const options = [
    {
      id: 1,
      name: 'Excluir comentário',
      icon: 'delete-outline',
      color: colors.error,
      onPress: () => {
        deleteComment({ commentId: comment.id, setIsDeleting });
        setShowOptions(false);
      },
    },
  ];

  return isDeleting ? (
    <Loader
      loaderPlacholder="Deletando..."
      style={{ paddingHorizontal: 16 }}
    />
  ) : (
    <>
      <Wrapper onLongPress={() => setShowOptions(true)}>
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
      </Wrapper>

      <Options
        isVisible={showOptions}
        onClose={() => setShowOptions(false)}
        options={options}
      />
    </>
  );
};

export default CommentCell;
