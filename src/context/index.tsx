import { createContext, Dispatch } from "react";

export type ActionType = "SET_THEME" | "SET_PRIMARY";

export interface IContext {
  state: InitialState | null;
  dispatch: Dispatch<Action>;
}

export interface Action {
  type: ActionType;
  payload?: ActionPayload;
}

interface ActionPayload {
  language?: string;
  routMenu?: string;
  primary?: string;
  theme?: Theme;
  [key: string]: any;
}

interface Theme {
  colorBackground: string;
  colorFont: string;
  colorPrimary: string;
  colorError: string;
  colorCard: string;
  colorGraf: string;
  colorContent: string;
  colorButtonbuy: string;
  colorScroll: string;
}

export interface InitialState {
  routMenu?:string;
  primary?: string;
  theme: Theme | null;
}

export const initialState: InitialState = {
  routMenu: "pages/dashbord",
  primary: "#03dac5",
  theme: {
    colorBackground: "#0a0a0a",
    colorFont: "#fff",
    colorPrimary: "#bb86fc",
    colorError: "#f50057",
    colorCard: "#212121",
    colorGraf: "#03dac5",
    colorContent:"#2f2f2f",
    colorButtonbuy: "#00e676",
    colorScroll: "#212121"

  },
};

export const Context = createContext<IContext>(null);
