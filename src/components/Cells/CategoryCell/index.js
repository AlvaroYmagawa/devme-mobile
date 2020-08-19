import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

// ICONS
import { Fontisto, Ionicons, FontAwesome } from '@expo/vector-icons';

// CUSTOM IMPORTS
import { Container, Card, Name } from './styles';
import { colors } from '../../../styles';

const CategoryCell = ({ category, accentTheme }) => {
  const { name, type } = category;

  // STATE
  const [isPress, setIsPress] = React.useState(false);

  // FUNCTIONS
  function setIconColor() {
    if (accentTheme) return colors.primaryDark;

    if (isPress) return colors.accent;

    return colors.text;
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

      default:
    }
  }

  return (
    <Container>
      <Card
        accentTheme={accentTheme}
        activeOpacity={1}
        onPressIn={() => setIsPress(true)}
        onPressOut={() => setIsPress(false)}
      >
        {renderIcon()}
      </Card>

      <Name isPress={isPress} accentTheme={accentTheme}>{name}</Name>
    </Container>
  );
};

CategoryCell.propTypes = {
  category: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CategoryCell;
