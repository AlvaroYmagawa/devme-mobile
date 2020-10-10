import api from '../../services/api';
import { showErrors } from '../../utils/apiUtils';

// ACTIONS
import { store } from '../../store';
import { deleteCommentSuccessful } from '../../store/modules/comments/actions';

export async function deleteComment({ setIsDeleting, commentId }) {
  setIsDeleting(true);

  setTimeout(async () => {
    await api.get('/posts').then(() => {
      store.dispatch(deleteCommentSuccessful({ commentId }));

      setIsDeleting(false);
    }).catch((err) => {
      showErrors(err);
      setIsDeleting(false);
    });
  }, 2000);
}
