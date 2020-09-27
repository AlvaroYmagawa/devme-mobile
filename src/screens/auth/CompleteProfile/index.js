import React, { useRef, useCallback } from 'react';
import {
  View, Text, Image, ScrollView,
} from 'react-native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

// ACTIONS
import { signOut } from '../../../store/modules/auth/actions';
import { updateUserSuccessful } from '../../../store/modules/user/actions';

// CUSTOM IMPORTS
import { firebaseSignOut } from '../../../services/firebase';
import welcomeImage from '../../../assets/welcome.png';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { styles } from './styles';
import { isDataValid } from '../../../utils/validations';
import { getYupErrors } from '../../../utils/yup';

const CompleteProfile = () => {
  const dispatch = useDispatch();

  // REFS
  const formRef = useRef(null);

  // STATE
  const [isUpdating, setIsUptading] = React.useState(false);

  // FUNCTIONS
  const handleSubmit = useCallback(async (data) => {
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
    <ScrollView contentContainerStyle={{
      flexGrow: 1,
    }}
    >
      <View style={styles.container}>
        <AntDesign
          onPress={() => {
            firebaseSignOut().then(() => {
              dispatch(signOut());
            });
          }}
          name="arrowleft"
          size={24}
          color="#f6f6f6"
          style={{ alignSelf: 'flex-start' }}
        />

        <Image source={welcomeImage} style={styles.image} />

        <Text style={styles.title}>
          Bem vindo ao
          {' '}
          <Text style={styles.strong}>DEVme!</Text>
        </Text>

        <Text style={styles.description}>Escolha um nome de usuário</Text>

        <Form onSubmit={handleSubmit} ref={formRef} style={styles.form}>
          <Input
            name="displayName"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            icon="person"
            returnKeyType="next"
            style={styles.input}
          />

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

          <Button
            isLoading={isUpdating}
            style={styles.button}
            onPress={() => {
              if (formRef.current) formRef.current.submitForm();
            }}
          >
            Entrar no App
          </Button>
        </Form>
      </View>
    </ScrollView>
  );
};

export default CompleteProfile;
