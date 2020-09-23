import React, { useRef, useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';

// ACTIONS
import { updateUserSuccessful } from '../../store/modules/user/actions';

// CUSTOM IMPORTS
import welcomeImage from '../../assets/welcome.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { styles } from './styles';
import { isDataValid } from '../../utils/validations';
import { getYupErrors } from '../../utils/yup';

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

      const { displayName } = data;

      const update = {
        displayName,
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
        displayName: Yup.string().required('o nome é obrigatório'),
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
    <View style={styles.container}>
      <Image source={welcomeImage} style={styles.image} />

      <Text style={styles.title}>
        Bem vindo ao
        {' '}
        <Text style={styles.strong}>DEVme!</Text>
      </Text>

      <Text style={styles.description}>Escolha um nome de usuário</Text>

      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input
          name="displayName"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome completo"
          icon="person"
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
  );
};

export default CompleteProfile;
