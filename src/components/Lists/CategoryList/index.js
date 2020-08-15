import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ACTIONS
import { listCategories } from '../../../store/modules/categories/actions';

// CUSTOM IMPORTS
import { Container, Category } from './styles';

const CategoriyList = ({ style }) => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => state.categories.list);
  const { data: categories, isLoaded } = reducer;

  // FUNCTIONS
  React.useEffect(() => {
    dispatch(listCategories());
  }, []);

  return isLoaded && (
    <Container style={style} horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category) => (<Category key={category.id} category={category} />))}
    </Container>
  );
};

export default CategoriyList;
