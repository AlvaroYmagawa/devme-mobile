import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ACTIONS
import { listPosts } from '../../../store/modules/posts/actions';

// CUSTOM IMPORTS
import {
  Container, Post, Categories,
} from './styles';
import AddPostCard from './AddPostCard';

const PostList = ({ style }) => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => state.posts.list);
  const { data, isLoaded } = reducer;

  const profile = useSelector((state) => state.user.profile);

  // FUNCTIONS
  React.useEffect(() => {
    dispatch(listPosts());
  }, []);

  return isLoaded && (
    <Container
      style={style}
      ListHeaderComponent={(
        <>
          <Categories />
          <AddPostCard profile={profile} />
        </>
      )}
      showsVerticalScrollIndicator={false}
      data={data}
      KeyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <Post post={item} />}
      onEndReached={() => {}}
    />
  );
};

export default PostList;
