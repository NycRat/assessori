import { SetStoreFunction } from "solid-js/store";

export interface Question {
  prompt: string;
  choices: string[];
}

export interface State {
  content: string;
  questions: Question[];
}

export type StateSetter = SetStoreFunction<State>;
export type StateContextType = { state: State; setState: StateSetter };
