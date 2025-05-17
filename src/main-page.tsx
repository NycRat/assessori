import { Component, onMount, useContext } from "solid-js";
import SvgPreview from "./svg-preview";
import DownloadButton from "./download-button";
import { StateContext } from "./state-context";
import { StateContextType } from "./types";

const defaultContent =
  "#set text(40pt)\n\nHello !!\n\nThis is Typst in the browser !!\n\n$ integral_0^(10) e^x dif x = e^10 - 1 $";

const MainPage: Component = () => {
  const context = useContext<StateContextType | undefined>(StateContext);

  if (!context) {
    return <div>ERROR: no context provider </div>;
  }

  const { state, setState } = context;

  onMount(() => {
    setState("content", defaultContent);
  });

  return (
    <main class="p-12 flex gap-2">
      <textarea
        class="border bg-card p-2"
        onInput={(event) => {
          setState("content", event.target.value);
        }}
        cols={80}
      >
        {defaultContent}
      </textarea>

      <div class="space-y-2">
        <SvgPreview content={state.content} />
        <DownloadButton content={state.content} />
      </div>
    </main>
  );
};

export default MainPage;
