import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import Input from '../../Input';

// APIs
import { createPost } from '../../../apis/posts';

// CUSTOM IMPORTS
import { styles } from './styles';
import Avatar from '../../Avatar';
import { colors } from '../../../styles';
import Button from '../../Button';
import { isDataValid } from '../../../utils/validations';
import { getYupErrors } from '../../../utils/yup';

const AddPostModal = ({
  isVisible, onClose, selectedCategory, post,
}) => {
  const profile = useSelector((state) => state.user.profile);
  const isEditMode = post;

  // REFS
  const formRef = React.useRef(null);

  // STATE
  const [isLoading, setIsLoading] = React.useState(null);

  // FUNCTIONS
  const handleSubmit = React.useCallback(async (data) => {
    function dispatchCreatePost() {
      const { id: category_id } = selectedCategory;
      const { title, description } = data;

      const postData = {
        category_id,
        title,
        description,
        created_at: 'agora mesmo',
        user: {
          name: profile.displayName,
          avatar: profile.photoURL,
        },
        categories: [selectedCategory],
      };

      createPost({ setIsLoading, postData, onClose });
    }

    try {
      // Clear errors
      if (isDataValid(formRef.current)) formRef.current.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().required('O título da publicação é obrigatório'),
        description: Yup.string().required('A descrição da publicação é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatchCreatePost();
    } catch (err) {
      // Format yup errors
      const errors = getYupErrors(err);

      // Set errors into form inputs
      if (isDataValid(formRef.current)) formRef.current.setErrors(errors);
    }
  }, []);

  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.backdrop}
    >
      <Form ref={formRef} onSubmit={handleSubmit}>
        <View style={styles.container}>
          <Text style={styles.title}>Criar Publicação</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
            <Avatar
              style={styles.avatar}
              source={{ uri: profile.photoURL }}
            />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.userName}>{profile.displayName}</Text>

              {selectedCategory ? (
                <View style={{ flexDirection: 'row', marginTop: 4 }}>
                  <Text style={styles.tag}>{selectedCategory.name}</Text>
                </View>
              ) : (
                <View style={{ flexDirection: 'row', marginTop: 4 }}>
                  <Text style={styles.tag}>Geral</Text>
                </View>
              )}

            </View>
          </View>

          <Input
            title="Título da publicação"
            name="title"
            placeholder="Digite o título da publicação"
            placeholderTextColor={colors.primary}
            style={{ marginBottom: 8, elevation: 1001 }}
          />

          <Input
            title="Descrição"
            name="description"
            multiline
            placeholder="Qual sua dúvida?"
            placeholderTextColor={colors.primary}
          />

          <TouchableOpacity
            style={{ marginTop: 32 }}
            activeOpacity={1}
            onPress={() => {
              if (formRef.current) formRef.current.submitForm();
            }}
          >
            <Button isLoading={isLoading}>Publicar</Button>
          </TouchableOpacity>

        </View>
      </Form>
    </Modal>
  );
};

AddPostModal.propTypes = {
  post: PropTypes.oneOfType([PropTypes.object]),
};

AddPostModal.defaultProps = {
  post: null,
};

export default AddPostModal;
