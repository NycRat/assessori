import { Component, For, useContext } from "solid-js";
import SvgPreview from "./components/svg-preview";
import { Question, StateContextType } from "./lib/types";
import { StateContext } from "./lib/state-context";
import { Button } from "./components/ui/button";
import { produce } from "solid-js/store";
import Mcq from "./components/mcq-question";
import { getDefaultMcq } from "./lib/templates";
import DownloadButton from "./components/download-button";

const getContentFromQuestions = (questions: Question[]) => {
  let content = `#import "@preview/examine-ib:0.1.1": *

#show: conf.with(exam-id: [0000-0001])

#set page(fill: white)

${questions
  .map((question) => {
    return `#mcq(
  [${question.prompt}],
  [${question.choices[0]}],
  [${question.choices[1]}],
  [${question.choices[2]}],
  [${question.choices[3]}],
)`;
  })
  .join("\n")}
`;
  console.log(content);
  return content;
};

const ComposePage: Component = () => {
  const context = useContext<StateContextType | undefined>(StateContext);

  if (!context) {
    return <div>ERROR: no context provider </div>;
  }

  const { state, setState } = context;

  return (
    <main class="p-12 gap-4 flex justify-center w-full">
      <div class="overflow-y-auto max-h-full w-1/3 space-y-4">
        <div class="space-x-4">
          <Button
            onClick={() => {
              setState(
                "questions",
                produce((questions) => {
                  questions.push(getDefaultMcq());
                }),
              );
            }}
            variant={"secondary"}
          >
            add question
          </Button>
          <DownloadButton content={getContentFromQuestions(state.questions)} />
        </div>

        <ul class="space-y-4">
          {Array.from(Array(state.questions.length).keys()).map((i) => (
            <li>
              <Mcq index={i} />
            </li>
          ))}
        </ul>
      </div>

      <div class="max-h-full overflow-y-auto">
        <SvgPreview content={getContentFromQuestions(state.questions)} />
      </div>
    </main>
  );
};

export default ComposePage;
