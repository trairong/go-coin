import { Action, initialState, InitialState } from ".";

export const reducer = (
  state: InitialState,
  { type, payload }: Action
): InitialState => {
  switch (type) {
    case "SET_THEME":
      return {
        ...state,
        theme: payload.theme
      };
    case "SET_PRIMARY":
      return {
        ...state,
        primary: payload.primary
      };
    default:
      return state;
  }
};
