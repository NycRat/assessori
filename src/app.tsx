import { Component, createEffect } from "solid-js";
import { SidebarProvider } from "./components/ui/sidebar";
import AppSidebar from "./components/app-sidebar";
import { RouteSectionProps } from "@solidjs/router";
import { createStore } from "solid-js/store";
import { StateContext } from "./lib/state-context";
import { State } from "./lib/types";
import { apiFetchQuestions, apiPushQuestions } from "./lib/api";

const App: Component<RouteSectionProps> = (props) => {
  const [state, setState] = createStore<State>({
    content: "",
    questions: apiFetchQuestions(),
  });

  createEffect(() => {
    apiPushQuestions(state.questions);
  });

  return (
    <StateContext.Provider value={{ state, setState }}>
      <SidebarProvider class="max-h-screen">
        <AppSidebar />
        {props.children}
      </SidebarProvider>
    </StateContext.Provider>
  );
};

export default App;
