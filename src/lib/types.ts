import { SetStoreFunction } from "solid-js/store";

export interface State {
  content: string;
}

export type StateSetter = SetStoreFunction<State>;
export type StateContextType = { state: State; setState: StateSetter };
