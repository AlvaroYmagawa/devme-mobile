import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ACTIONS
import { listCategories } from '../../../store/modules/categories/actions';

// CUSTOM IMPORTS
import { Container, CategoryCell } from './styles';

const Categories = ({ style }) => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => state.categories.list);
  const { data, isLoaded } = reducer;

  // FUNCTIONS
  React.useEffect(() => {
    dispatch(listCategories());
  }, []);

  return isLoaded && (
    <Container
      style={style}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      KeyExtractor={(item) => item.id}
      renderItem={({ item }) => <CategoryCell category={item} />}
    />
  );
};

export default Categories;
