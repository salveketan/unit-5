import { legacy_createStore as createStore} from "redux";
import { reducer } from "./reducer";
export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


console.log("state", store.getState());