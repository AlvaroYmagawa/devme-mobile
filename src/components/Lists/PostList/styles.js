import styled from 'styled-components/native';

// CUSTOM IMPORTS
import PostCell from '../../Cells/PostCell';
import CategoryList from '../CategoryList';

export const Container = styled.FlatList`
  padding: 0 8px;
`;

export const Categories = styled(CategoryList)`
  margin-bottom: 16px;
`;

export const Post = styled(PostCell)`
  margin-top: 16px;
`;
