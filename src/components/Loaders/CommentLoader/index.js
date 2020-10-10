import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

// CUSTOM IMPORTS
import { colors } from '../../../styles';

const dimensions = Dimensions.get('window');

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const Loader = ({ style, loaderPlacholder }) => (
  <Placeholder
    Animation={Fade}
    style={style}
  >
    <View style={{ flexDirection: 'row' }}>
      <PlaceholderMedia style={{
        backgroundColor: colors.primaryDark,
        height: 40,
        width: 40,
        borderRadius: 20,
        opacity: 0.3,
      }}
      />

      <View>
        <PlaceholderLine
          style={{
            backgroundColor: colors.primaryDark,
            marginLeft: 16,
            borderRadius: 16,
            height: getRandomArbitrary(30, 80),
            opacity: 0.3,
            marginBottom: 8,
            width: dimensions.width * getRandomArbitrary(0.3, 0.7),
          }}
        />
        {loaderPlacholder && (
        <Text style={{
          color: colors.opaquetText,
          fontSize: 12,
          position: 'relative',
          left: 16,
        }}
        >
          {loaderPlacholder}
        </Text>
        )}

      </View>

    </View>
  </Placeholder>
);

export default Loader;
