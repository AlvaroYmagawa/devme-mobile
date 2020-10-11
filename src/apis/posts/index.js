import api from '../../services/api';
import { showErrors } from '../../utils/apiUtils';

// ACTIONS
import { store } from '../../store';
import { craetePostSuccessful, deletePostSuccessful, updatePostSuccessful } from '../../store/modules/posts/actions';

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
  }, 2000);
}

export async function updatePost({
  setIsLoading, onClose, postData, postId,
}) {
  setIsLoading(true);

  setTimeout(async () => {
    await api.put(`/posts/${postId}`, postData).then((response) => {
      store.dispatch(updatePostSuccessful({ post: response.data, postId }));
      setIsLoading(false);
      onClose();
    }).catch((err) => {
      showErrors(err);
      setIsLoading(false);
    });
  }, 2000);
}

export async function deletePost({ setIsLoading, postId }) {
  setIsLoading(true);

  setTimeout(async () => {
    await api.delete(`/posts/${postId}`).then(() => {
      store.dispatch(deletePostSuccessful({ postId }));

      setIsLoading(false);
    }).catch((err) => {
      showErrors(err);
      setIsLoading(false);
    });
  }, 2000);
}
