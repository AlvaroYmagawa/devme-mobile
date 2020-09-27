import React from 'react';

// CUSTOM IMPORTS
import {
  Container,
  ContainerTop,
  Avatar,
  InputButton,
  Text,
} from './styles';
import noAvatar from '../../../../assets/noAvatar.png';
import AddModal from './AddPostModal';

const AddPostCard = ({ profile, selectedCategory }) => {
  // STATES
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Container>
        <ContainerTop>
          <Avatar source={profile.photoURL ? { uri: profile.photoURL } : noAvatar} />

          <InputButton onPress={() => setShowModal(true)}>
            <Text>Digite aqui sua dúvida</Text>
          </InputButton>
        </ContainerTop>

      </Container>

      <AddModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export default AddPostCard;
