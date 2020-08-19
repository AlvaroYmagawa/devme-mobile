import React from 'react';
import { useSelector } from 'react-redux';

// CUSTOM IMPORTS
import Background from '../../components/Background';
import {
  Container,
  Card,
  CardButton,
  Avatar,
  Fieldset,
  FieldsetKnowledges,
  FieldsetTitle,
  UserName,
  Role,
  Bio,
  Knowledges,
} from './styles';

const MyProfile = () => {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Background>

      <Container>
        {/* <Header /> */}
        <Card>
          <Avatar source={{ uri: profile.avatar }} />

          <UserName>{profile.name}</UserName>
          <Role>{profile.role}</Role>

          <FieldsetKnowledges>
            <Knowledges accentTheme list={profile.knowledges} />
          </FieldsetKnowledges>

          <Fieldset>
            <FieldsetTitle>Bio</FieldsetTitle>
            <Bio>{profile.bio}</Bio>
          </Fieldset>

          <CardButton>Editar Perfil</CardButton>
        </Card>
      </Container>
    </Background>
  );
};

export default MyProfile;
