import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// ACTIONS
import { listComments, clearComments, craeteComment } from '../../../store/modules/comments/actions';

// CUSTOM
import apiStatus from '../../../apis/status';
import {
  Container, Comments, FieldsetInput, Input, SendButton,
} from './styles';
import CommentCell from '../../Cells/CommentCell';
import CommentLoader from '../../Loaders/CommentLoader';
import { colors } from '../../../styles';

const loaders = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

const CommentList = ({ postId }) => {
  const dispatch = useDispatch();
  const { data: comments, isLoaded, isCreating } = useSelector((state) => state.comments.list);
  const { displayName, photoURL } = useSelector((state) => state.user.profile);

  // REFS
  const scrollRef = React.useRef(null);

  // STATES
  const [message, setMessage] = React.useState('');

  // FUNCTIONS
  React.useEffect(() => {
    dispatch(listComments({ postId }));

    return () => {
      dispatch(clearComments());
    };
  }, []);

  function sendComment() {
    const commentData = {
      post_id: postId,
      user: {
        name: displayName,
        avatar: photoURL,
      },
      message,
      created_at: 'Agora mesmo',
      owner: true,
    };

    dispatch(craeteComment({ commentData }));
  }

  return (
    <Container>
      <Comments
        ref={(ref) => { scrollRef.current = ref; }}
        showsVerticalScrollIndicator
        data={isLoaded ? comments : loaders}
        KeyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (isLoaded
          ? <CommentCell comment={item} />
          : (<CommentLoader width={Dimensions.get('window').width - 16} style={{ marginTop: 24 }} />))}
        onContentSizeChange={() => scrollRef.current.scrollToEnd({ animated: true })}
        onLayout={() => scrollRef.current.scrollToEnd({ animated: true })}
        ListFooterComponent={isCreating === apiStatus.PENDING && (
          <CommentLoader
            width={Dimensions.get('window').width - 16}
            style={{ marginVertical: 16 }}
            loaderPlacholder="Publicando..."
          />
        )}
      />

      <FieldsetInput>
        <Input
          placeholder="Digite um cometário"
          multiline
          value={message}
          onChangeText={(text) => setMessage(text)}
        />

        <SendButton onPress={sendComment}>
          <Ionicons
            name="md-send"
            size={24}
            color={colors.primaryDark}
            style={{ position: 'relative', left: 2 }}
          />
        </SendButton>
      </FieldsetInput>

    </Container>

  );
};

export default CommentList;