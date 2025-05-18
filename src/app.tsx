import { Component } from "solid-js";
import { SidebarProvider } from "./components/ui/sidebar";
import AppSidebar from "./components/app-sidebar";
import { RouteSectionProps } from "@solidjs/router";
import { createStore } from "solid-js/store";
import { StateContext } from "./lib/state-context";
import { State } from "./lib/types";

const App: Component<RouteSectionProps> = (props) => {
  const [state, setState] = createStore<State>({ content: "" });

  return (
    <StateContext.Provider value={{ state, setState }}>
      <SidebarProvider>
        <AppSidebar />
        {props.children}
      </SidebarProvider>
    </StateContext.Provider>
  );
};

export default App;
