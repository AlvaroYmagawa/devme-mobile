import React from 'react';
import { View } from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

// CUSTOM IMPORTS
import { colors } from '../../../styles';

const Loader = () => (
  <Placeholder
    Animation={Fade}
    style={{
      backgroundColor: colors.primary,
      marginBottom: 16,
      padding: 16,
      borderRadius: 16,
      height: 220,
    }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

      <PlaceholderMedia style={{
        backgroundColor: colors.primaryDark,
        height: 40,
        width: 40,
        borderRadius: 20,
        opacity: 0.3,
      }}
      />

      <View style={{ width: '40%' }}>
        <PlaceholderLine
          style={{
            backgroundColor: colors.primaryDark,
            marginLeft: 16,
            borderRadius: 16,
            height: 8,
            opacity: 0.3,
            marginBottom: 8,
          }}
        />
        <PlaceholderLine style={{
          width: '40%',
          backgroundColor: colors.primaryDark,
          marginLeft: 16,
          borderRadius: 16,
          height: 8,
          marginBottom: 0,
          opacity: 0.3,
        }}
        />
      </View>

    </View>

  </Placeholder>
);

export default Loader;
