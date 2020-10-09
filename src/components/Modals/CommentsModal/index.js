import React from 'react';
import Modal from 'react-native-modal';
import { View, Text } from 'react-native';

// CUSTOM IMPORTS
import CommentList from '../../Lists/CommentList';
import { styles } from './styles';

const CommentsModal = ({ isVisible, onClose, post }) => (
  <Modal
    isVisible={isVisible}
    swipeDirection="down"
    onSwipeComplete={onClose}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}
    style={styles.backdrop}
  >
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Comentários</Text>
      </View>

      <CommentList postId={post.id} />
    </View>
  </Modal>
);

export default CommentsModal;
