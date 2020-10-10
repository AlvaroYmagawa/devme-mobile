import React from 'react';
import Modal from 'react-native-modal';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// CUSTOM IMPORTS
import { styles } from './styles';

const Options = ({ isVisible, onClose, options }) => (
  <Modal
    isVisible={isVisible}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}
    style={styles.backdrop}
  >
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          style={styles.commentFieldset}
          onPress={option.onPress}
        >
          <Text style={{ ...styles.text, color: option.color }}>{option.name}</Text>
          <MaterialCommunityIcons name={option.icon} size={30} color={option.color} />
        </TouchableOpacity>
      ))}

    </View>
  </Modal>
);

export default Options;
