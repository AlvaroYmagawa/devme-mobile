import api from '../../services/api';
import { showErrors } from '../../utils/apiUtils';

export async function fetchPosts({ setPosts, setIsLoaded }) {
  await api.get('/posts').then((response) => {
    setPosts(response.data);

    setIsLoaded(true);
  }).catch((err) => {
    showErrors(err);
    setIsLoaded(true);
  });
}

export async function createPost({ setIsLoaded }) {
  await api.post('/posts').then(() => {
    setIsLoaded(true);
  }).catch((err) => {
    showErrors(err);
    setIsLoaded(true);
  });
}
