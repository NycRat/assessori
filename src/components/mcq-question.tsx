import { Component } from "solid-js";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useAppContext } from "@/lib/state-context";
import { produce } from "solid-js/store";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import X from "lucide-solid/icons/x";

const Mcq: Component<{
  index: number;
}> = (props) => {
  const { state, setState } = useAppContext();

  return (
    <Card>
      <CardHeader class="py-4">
        <CardTitle class="flex">
          <textarea
            class="resize-none py-1 flex-1"
            rows={1}
            onInput={(event) => {
              // props.update({ prompt: event.target.value || "" });
              setState(
                "questions",
                produce((questions) => {
                  questions[props.index].prompt = event.target.value;
                }),
              );
            }}
          >
            {state.questions[props.index].prompt}
          </textarea>
          <Button
            variant={"ghost"}
            class="[&_svg]:size-5 rounded-sm"
            size={"none"}
            onClick={() => {
              setState(
                "questions",
                produce((questions) => {
                  questions.splice(props.index, 1);
                }),
              );
            }}
          >
            <X />
          </Button>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent class="pt-6 space-y-1">
        {Array.from(Array(4).keys()).map((i) => (
          <div class="flex gap-4">
            {String.fromCharCode("A".charCodeAt(0) + i)}.
            <textarea
              onInput={(event) => {
                setState(
                  "questions",
                  produce((questions) => {
                    questions[props.index].choices[i] = event.target.value;
                  }),
                );
              }}
              rows={1}
              class="resize-none w-full"
            >
              {state.questions[props.index].choices[i]}
            </textarea>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Mcq;
