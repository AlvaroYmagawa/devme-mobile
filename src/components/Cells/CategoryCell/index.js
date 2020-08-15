import React from 'react';
import PropTypes from 'prop-types';

// ICONS
import { Fontisto } from '@expo/vector-icons';

// CUSTOM IMPORTS
import { Container, Card, Name } from './styles';
import { colors } from '../../../styles';

const CategoryCell = ({ category }) => {
  const { name, type } = category;

  function renderIcon() {
    switch (type) {
      case 'reactJs':
      case 'reactNative':
        return <Fontisto name="react" size={24} color={colors.accent} />;

      case 'vueJs':
        return <Fontisto name="react" size={24} color={colors.accent} />;

      case 'git':
        return <Fontisto name="react" size={24} color={colors.accent} />;

      case 'javascript':
        return <Fontisto name="react" size={24} color={colors.accent} />;

      case 'css':
        return <Fontisto name="react" size={24} color={colors.accent} />;

      default:
    }
  }

  return (
    <Container>
      <Card>
        {renderIcon()}
      </Card>

      <Name>{name}</Name>
    </Container>
  );
};

CategoryCell.propTypes = {
  category: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CategoryCell;
