import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// ACTIONS
import { Fontisto, Ionicons, FontAwesome } from '@expo/vector-icons';
import { listPosts } from '../../../store/modules/posts/actions';

// ICONS

// CUSTOM IMPORTS
import { Container, Card, Name } from './styles';
import { colors } from '../../../styles';

const CategoryCell = ({
  category, accentTheme, isActive, setSelectedCategory,
}) => {
  const { name, type } = category;
  const dispatch = useDispatch();

  // STATE
  const [isPress, setIsPress] = React.useState(false);

  // FUNCTIONS
  function setIconColor() {
    if (accentTheme) return colors.primaryDark;

    if (isPress || isActive) return colors.accent;

    return colors.text;
  }

  function handleClick() {
    setSelectedCategory(category);

    if (category.id === 0) {
      dispatch(listPosts());
    } else {
      dispatch(listPosts(category.id));
    }
  }

  const iconColor = setIconColor();

  function renderIcon() {
    switch (type) {
      case 'reactJs':
      case 'reactNative':
        return <Fontisto name="react" size={24} color={iconColor} />;

      case 'vueJs':
        return <Fontisto name="vuejs" size={24} color={iconColor} />;

      case 'git':
        return <Ionicons name="ios-git-branch" size={24} color={iconColor} />;

      case 'javascript':

        return <Ionicons name="logo-javascript" size={24} color={iconColor} />;
      case 'css':
        return <FontAwesome name="css3" size={24} color={iconColor} />;

      case 'nodeJs': return <Ionicons name="logo-nodejs" size={24} color={iconColor} />;

      case 'home': return <Ionicons name="md-home" size={24} color={iconColor} />;

      default:
    }
  }

  return (
    <Container>
      <Card
        accentTheme={accentTheme}
        activeOpacity={1}
        onPress={handleClick}
        onPressIn={() => setIsPress(true)}
        onPressOut={() => setIsPress(false)}
      >
        {renderIcon()}
      </Card>

      <Name isPress={isPress || isActive} accentTheme={accentTheme}>{name}</Name>
    </Container>
  );
};

CategoryCell.propTypes = {
  category: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CategoryCell;
