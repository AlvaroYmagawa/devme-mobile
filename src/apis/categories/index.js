import api from '../../services/api';
import { showErrors } from '../../utils/apiUtils';

export async function fetchCategoris({ setCategories, setIsLoaded }) {
  await api.get('/categories').then((response) => {
    setCategories(response.data);

    setIsLoaded(true);
  }).catch((err) => {
    showErrors(err);
    setIsLoaded(true);
  });
}
