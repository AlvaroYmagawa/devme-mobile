import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dimensions, View } from 'react-native';

// APIs
import { listPosts } from '../../../store/modules/posts/actions';

// CUSTOM IMPORTS
import {
  Container, Post, Categories,
} from './styles';
import AddPostCard from './AddPostCard';
import Loader from '../../Loaders/PostLoader';

const PostList = ({ style }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const { data: posts, isLoaded } = useSelector((state) => state.posts.list);

  // STATES
  const [selectedCategory, setSelectedCategory] = React.useState({ id: 0, name: 'Geral', type: 'home' });

  // FUNCTIONS
  React.useEffect(() => {
    dispatch(listPosts());
  }, []);

  const loaders = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <>
      <Container
        style={style}
        ListHeaderComponent={(
          <>
            <Categories
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <AddPostCard profile={profile} selectedCategory={selectedCategory} />
          </>
      )}
        showsVerticalScrollIndicator={false}
        data={isLoaded ? posts : loaders}
        KeyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (isLoaded
          ? <Post post={item} isLoaded={isLoaded} />
          : (<Loader width={Dimensions.get('window').width - 16} />))}
        onEndReached={() => {}}
      />
    </>
  );
};

export default PostList;
