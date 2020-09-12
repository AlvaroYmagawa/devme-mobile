import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

// CUSTOM IMPORTS
import {
  Container,
  ContainerTop,
  ContainerBottom,
  Avatar,
  TInput,
  PublishButton,
  MiniText,
  Text,
  CategoriesButton,
} from './styles';
import { colors } from '../../../../styles';

const AddPostCard = ({ profile }) => (
  <Container>
    <ContainerTop>
      {/* <Avatar source={{ uri: profile.avatar }} /> */}
      <TInput placeholder="Digite aqui sua dúvida." multiline />
    </ContainerTop>

    <ContainerBottom>
      <CategoriesButton>
        <FontAwesome
          name="plus-circle"
          size={16}
          color={colors.accent}
          style={{ marginRight: 8 }}
        />
        <MiniText>Adicionar Categoria</MiniText>
      </CategoriesButton>

      <PublishButton>
        Publicar
      </PublishButton>

    </ContainerBottom>

  </Container>
);

export default AddPostCard;
