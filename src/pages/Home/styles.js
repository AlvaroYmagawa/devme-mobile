import styled from 'styled-components/native';

// CUSTOM IMPORTS
import CategoryList from '../../components/Lists/Categories';

export const Container = styled.View`
  flex: 1;
`;

export const Scroll = styled.ScrollView`
  max-height: 100%;
`;

export const Categories = styled(CategoryList)`
  margin: 8px;
`;
