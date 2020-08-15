import styled from 'styled-components/native';

// CUSTOM IMPORTS
import PostList from '../../components/Lists/PostList';

export const Container = styled.View`
  flex: 1;
`;

export const Posts = styled(PostList)`
  margin-top: 8px;
`;
