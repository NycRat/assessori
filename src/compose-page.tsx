import { Component, useContext } from "solid-js";
import SvgPreview from "./components/svg-preview";
import { StateContextType } from "./lib/types";
import { StateContext } from "./lib/state-context";

const ComposePage: Component = () => {
  const context = useContext<StateContextType | undefined>(StateContext);

  if (!context) {
    return <div>ERROR: no context provider </div>;
  }

  const { state, setState } = context;

  return (
    <main class="p-12 flex gap-2">
      Compose...
      {/* <SvgPreview content={state.content} /> */}
    </main>
  );
};

export default ComposePage;
