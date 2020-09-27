import React from 'react';
import {
  View, Text, TextInput, Image, TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';

// CUSTOM IMPORTS
import { styles } from './styles';
import noAvatar from '../../../../../assets/noAvatar.png';
import { colors } from '../../../../../styles';
import Button from '../../../../Button';

const AddPostModal = ({ isVisible, onClose, selectedCategory }) => {
  const profile = useSelector((state) => state.user.profile);

  // FUNCTIONS
  function handlePost() {

  }

  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.backdrop}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Criar Publicação</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
          <Image
            style={styles.avatar}
            source={profile.photoURL ? { uri: profile.photoURL } : noAvatar}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.userName}>{profile.displayName}</Text>

            {selectedCategory && (
            <View style={{ flexDirection: 'row', marginTop: 4 }}>
              <Text style={styles.tag}>{selectedCategory.name}</Text>
            </View>
            ) }

          </View>
        </View>

        <View style={styles.fieldset}>
          <Text style={styles.fieldsetTitle}>Título da Publicação</Text>
          <TextInput
            placeholder="Digite o título da publicação"
            style={styles.textArea}
            placeholderTextColor={colors.opaquetText}
          />
        </View>

        <View style={styles.fieldset}>
          <Text style={styles.fieldsetTitle}>Descrição</Text>
          <TextInput
            multiline
            placeholder="Qual sua dúvida?"
            style={styles.textArea}
            placeholderTextColor={colors.opaquetText}
          />
        </View>

        <TouchableOpacity style={{ marginTop: 32 }} activeOpacity={1} onPress={handlePost}>
          <Button>Publicar</Button>
        </TouchableOpacity>

      </View>
    </Modal>
  );
};

export default AddPostModal;
