import { Component, onMount, useContext } from "solid-js";
import SvgPreview from "./components/svg-preview";
import DownloadButton from "./components/download-button";
import { StateContext } from "./lib/state-context";
import { StateContextType } from "./lib/types";

import { examTemplate } from "./lib/templates";

const SourcePage: Component = () => {
  const context = useContext<StateContextType | undefined>(StateContext);

  if (!context) {
    return <div>ERROR: no context provider </div>;
  }

  const { state, setState } = context;

  onMount(() => {
    setState("content", examTemplate);
  });

  return (
    <main class="p-12 flex gap-2 justify-center w-full">
      <textarea
        class="border bg-card p-2"
        onInput={(event) => {
          setState("content", event.target.value);
        }}
        cols={80}
      >
        {examTemplate}
      </textarea>

      <div class="max-h-full">
        <div class="space-y-2 overflow-scroll max-h-11/12">
          <SvgPreview content={state.content} />
        </div>
        <DownloadButton content={state.content} />
      </div>
    </main>
  );
};

export default SourcePage;
