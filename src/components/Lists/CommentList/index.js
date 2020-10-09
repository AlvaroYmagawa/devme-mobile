import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dimensions } from 'react-native';

// ACTIONS
import { listComments, clearComments } from '../../../store/modules/comments/actions';

// CUSTOM
import { Container } from './styles';
import CommentCell from '../../Cells/CommentCell';
import CommentLoader from '../../Loaders/CommentLoader';

const CommentList = ({ postId }) => {
  const dispatch = useDispatch();
  const { data: comments, isLoaded } = useSelector((state) => state.comments.list);

  // FUNCTIONS
  React.useEffect(() => {
    dispatch(listComments({ postId }));

    return () => {
      dispatch(clearComments());
    };
  }, []);

  const loaders = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

  return (
    <Container
      showsVerticalScrollIndicator={false}
      data={isLoaded ? comments : loaders}
      KeyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (isLoaded
        ? <CommentCell comment={item} />
        : (<CommentLoader width={Dimensions.get('window').width - 16} style={{ marginTop: 24 }} />))}
    />
  );
};

export default CommentList;
