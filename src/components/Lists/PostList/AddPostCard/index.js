import React from 'react';

// CUSTOM IMPORTS
import {
  Container,
  ContainerTop,
  InputButton,
  Text,
} from './styles';
import AddModal from './AddPostModal';
import Avatar from '../../../Avatar';

const AddPostCard = ({ profile, selectedCategory }) => {
  // STATES
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Container>
        <ContainerTop>
          <Avatar source={{ uri: profile.photoURL }} style={{ marginRight: 8 }} />

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
