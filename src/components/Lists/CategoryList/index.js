import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// APIs
import { fetchCategoris } from '../../../apis/categories';

// CUSTOM IMPORTS
import { Container, Category } from './styles';
import { isDataValid } from '../../../utils/validations';

const CategoriyList = ({
  style, list, accentTheme, setSelectedCategory, selectedCategory,
}) => {
  // STATE
  const [categories, setCategories] = React.useState(list || []);
  const [isLoaded, setIsLoaded] = React.useState(false);

  // FUNCTIONS
  React.useEffect(() => {
    fetchCategoris({ setCategories, setIsLoaded });
  }, []);

  return isLoaded && (
    <Container style={style} horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category) => (
        <Category
          accentTheme={accentTheme}
          key={category.id}
          category={category}
          isActive={isDataValid(selectedCategory) && selectedCategory.id === category.id}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </Container>
  );
};

export default CategoriyList;
