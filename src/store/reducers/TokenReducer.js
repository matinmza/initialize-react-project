// fill default state by localStorage
import LocalStorageHandler from "utils/LocalStorageHandler";
const [value, setValue, removeValue] = LocalStorageHandler("token");
const tokenInLocalStorage = value() || {};
const initialState = tokenInLocalStorage;

// action types
export const CHANGE_TOKEN_TYPE = "CHANGE-TOKEN";
export const REMOVE_TOKEN_TYPE = "REMOVE-TOKEN";

const TokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOKEN_TYPE:
      setValue(action.payload);
      return { ...action.payload };
    case REMOVE_TOKEN_TYPE:
      removeValue();
      return {};
    default:
      break;
  }
  return state;
};
export default TokenReducer;
