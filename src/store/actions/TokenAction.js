import {
  CHANGE_TOKEN_TYPE,
  REMOVE_TOKEN_TYPE,
} from "store/reducers/TokenReducer";

export const TokenAction = (token) => ({
  payload: token,
  type: CHANGE_TOKEN_TYPE,
});
export const RemoveTokenAction = () => ({
  type: REMOVE_TOKEN_TYPE,
});
