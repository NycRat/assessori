import { createContext, useContext } from "solid-js";
import { StateContextType } from "./types";

export const StateContext = createContext<StateContextType>();

export const useAppContext = () => {
  const context = useContext<StateContextType | undefined>(StateContext);

  if (!context) {
    throw new Error("No context provider");
  }

  return context;
};
