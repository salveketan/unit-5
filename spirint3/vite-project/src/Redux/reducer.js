import { USER } from "./actions";


const init = { user:{}};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case USER :
      return {...store, user:store.user+payload}
    default:
      return store;
  }
};
