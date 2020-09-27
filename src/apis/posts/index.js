import api from '../../services/api';
import { showErrors } from '../../utils/apiUtils';

// ACTIONS
import { store } from '../../store';
import { craetePostSuccessful } from '../../store/modules/posts/actions';

export async function fetchPosts({ setPosts, setIsLoaded }) {
  await api.get('/posts').then((response) => {
    setPosts(response.data);

    setIsLoaded(true);
  }).catch((err) => {
    showErrors(err);
    setIsLoaded(true);
  });
}

export async function createPost({ setIsLoading, onClose, postData }) {
  setIsLoading(true);

  setTimeout(async () => {
    await api.post('/posts', postData).then((response) => {
      store.dispatch(craetePostSuccessful({ post: response.data }));
      setIsLoading(false);
      onClose();
    }).catch((err) => {
      showErrors(err);
      setIsLoading(false);
    });
  }, 3000);
}
