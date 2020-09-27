import React from 'react';
import PropTypes from 'prop-types';
import { Linking, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import OptionsMenu from 'react-native-options-menu';

// APIs
import { deletePost } from '../../../apis/posts';

// CUSTOM IMPORTS
import { colors } from '../../../styles';
import Avatar from '../../Avatar';
import {
  Container,
  Header,
  HeaderLeft,
  UserName,
  CreatedAt,
  Title,
  Category,
  Categories,
  Description,
  HelpButton,
} from './styles';
import Loader from '../../Lists/PostList/Loader';

const PostCell = ({ post, style }) => {
  const {
    title, description, created_at: createdAt, user, categories,
  } = post;

  // STATE
  const [isDeleting, setIsDeleting] = React.useState(false);

  // FUNCTIONS
  function openWhatsApp() {
    Linking.openURL('https://wa.me/5543988209509');
  }

  return isDeleting ? (
    <View>
      <Text style={{
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.opaquetText,
        marginLeft: 16,
        marginBottom: 8,
      }}
      >
        Deletando...
      </Text>
      <Loader />
    </View>
  ) : (
    <Container style={style}>
      <Header>
        <Avatar source={{ uri: user.avatar }} style={{ marginRight: 8 }} />

        <HeaderLeft>
          <UserName>{user.name}</UserName>
          <CreatedAt>{createdAt}</CreatedAt>
        </HeaderLeft>

        <OptionsMenu
          customButton={<MaterialIcons name="more-vert" size={24} color={colors.strongText} />}
          buttonStyle={{
            width: 32, height: 8, margin: 7.5, resizeMode: 'contain',
          }}
          destructiveIndex={1}
          options={['Editar', 'Excluir']}
          actions={[() => {}, () => deletePost({ postId: post.id, setIsLoading: setIsDeleting })]}
        />

      </Header>

      <Title>{title}</Title>
      <Categories>
        {categories.map((category) => (<Category key={category.id}>{category.name}</Category>))}
      </Categories>

      <Description>
        {description}
      </Description>

      <HelpButton fontAwesomeIcon="whatsapp" onPress={openWhatsApp}>
        Entrar em contato
      </HelpButton>
    </Container>
  );
};

PostCell.propTypes = {
  post: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default PostCell;
