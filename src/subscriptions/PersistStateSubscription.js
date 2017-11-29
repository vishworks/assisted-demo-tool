import { debounce } from 'lodash';
import { persistState } from 'helpers/LocalStorageUtils.js';

export default store =>
  debounce(() => {
    persistState(store.getState());
  }, 100);
