import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import TokenReducer from "./reducers/TokenReducer";

const rootReducers = combineReducers({ token: TokenReducer });
const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
