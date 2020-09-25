import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

// ACTIONS
import AwesomeAlert from 'react-native-awesome-alerts';
import { signOut } from '../../store/modules/auth/actions';

// CUSTOM IMPORTS
import Background from '../../components/Background';
import { colors } from '../../styles';
import { firebaseSignOut } from '../../services/firebase';
import noAvatar from '../../assets/noAvatar.png';
import EditProfileModal from './EditProfile';
import {
  Container,
  Scroll,
  Card,
  EditButton,
  Avatar,
  Fieldset,
  FieldsetKnowledges,
  FieldsetTitle,
  UserName,
  Role,
  Bio,
  Knowledges,
  ExitButton,
  ExitButtonText,
} from './styles';

const MyProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const { displayName, phoneNumber } = profile;

  // STATES
  const [showAlert, setShowAlert] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const knowledges = [
    { id: 1, name: 'React Native', type: 'reactNative' },
    { id: 2, name: 'React.js', type: 'reactJs' },
    { id: 5, name: 'CSS', type: 'css' },
  ];

  return (
    <Background>
      <Container>
        <ExitButton onPress={() => setShowAlert(true)}>
          <ExitButtonText>Sair</ExitButtonText>
          <Ionicons name="md-exit" size={24} color={colors.text} />
        </ExitButton>

        <Card>
          <Avatar source={profile.photoURL ? { uri: profile.photoURL } : noAvatar} />
          <Scroll>
            <UserName>{displayName}</UserName>
            <Role>Frontend DEV</Role>

            <FieldsetKnowledges>
              <Knowledges accentTheme list={knowledges} />
            </FieldsetKnowledges>

            {phoneNumber && (
            <Fieldset>
              <FieldsetTitle>Celular</FieldsetTitle>
              <Bio>
                {phoneNumber}
              </Bio>
            </Fieldset>
            ) }

            <Fieldset>
              <FieldsetTitle>Bio</FieldsetTitle>
              <Bio>
                Lorem ipsum dolor sit amet. Id quod vero et illo sint ut
                inventore esse sit exercitationem voluptatibus sit consequatur
                suscipit. 33 similique quas sit nemo iste est provident omnis aut
                error veniam! Sit nobis dicta in voluptates quod eos galisum
                debitis id quaerat ipsa ea odit architecto ea quia laborum ad
                dicta voluptas. Ut omnis dolore et provident deleniti non maxime
                iste ut voluptate commodi et deserunt veniam et debitis veritatis
                aut laudantium reprehenderit.
              </Bio>
            </Fieldset>

            <EditButton onPress={() => setShowModal(true)}>Editar Perfil</EditButton>
          </Scroll>
        </Card>

        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Sair da aplicação"
          message="Tem certeza que deseja desconectar?"
          closeOnTouchOutside
          showCancelButton
          showConfirmButton
          cancelText="Não"
          confirmText="Sim"
          cancelButtonColor={colors.accent}
          confirmButtonColor={colors.text}
          onDismiss={() => setShowAlert(false)}
          onCancelPressed={() => setShowAlert(false)}
          onConfirmPressed={() => {
            firebaseSignOut().then(() => {
              dispatch(signOut());
            });
          }}
        />

      </Container>

      <EditProfileModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        profile={profile}
      />
    </Background>
  );
};

export default MyProfile;
