import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import firebase from 'firebase';

// ACTIONS
import { updateUserSuccessful } from '../../../store/modules/user/actions';

// CUSTOM IMPORTS
import Input from '../../../components/Input';
import ImagePicker from '../../../components/AvatarImagePicker';
import { styles } from './styles';
import { isDataValid } from '../../../utils/validations';
import { getYupErrors } from '../../../utils/yup';

const EditProfile = ({ isVisible, onClose, profile }) => {
  const formRef = React.useRef();
  const dispatch = useDispatch();

  // STATE
  const [isUpdating, setIsUptading] = React.useState(false);

  // FUNCTIONS
  const handleSubmit = React.useCallback(async (data) => {
    async function updateUser() {
      setIsUptading(true);

      const { displayName, phoneNumber } = data;

      const update = {
        displayName,
        phoneNumber,
      };

      await firebase.auth().currentUser.updateProfile(update).then(() => {
        dispatch(updateUserSuccessful({ update }));

        setIsUptading(false);
      }).catch(() => {
        setIsUptading(false);
      });
    }

    try {
      // Clear errors
      if (isDataValid(formRef.current)) formRef.current.setErrors({});

      const schema = Yup.object().shape({
        displayName: Yup.string().required('O nome é obrigatório'),
        phoneNumber: Yup.string().required('O celular o é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      updateUser();
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
      <View style={styles.container} behavior="padding">
        <ImagePicker style={styles.imagePicker} initialValue={profile.photoURL} />

        <Form onSubmit={handleSubmit} ref={formRef} style={styles.form} initialData={profile}>
          <View style={styles.fieldset}>
            <Text style={styles.label}>Nome</Text>
            <Input
              name="displayName"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome completo"
              icon="person"
              returnKeyType="next"
              style={styles.input}
            />
          </View>

          <View style={styles.fieldset}>
            <Text style={styles.label}>Telefone</Text>
            <Input
              name="phoneNumber"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Celular"
              maxLength={11}
              icon="phone"
              keyboardType="phone-pad"
              returnKeyType="next"
              style={styles.input}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => {
              if (formRef.current) formRef.current.submitForm();
            }}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </Form>
      </View>
    </Modal>
  );
};

export default EditProfile;
