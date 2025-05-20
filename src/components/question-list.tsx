import { Component, createSignal } from "solid-js";
import {
  DragDropProvider,
  DragDropSensors,
  DragEvent,
  DragOverlay,
  SortableProvider,
  closestCenter,
} from "@thisbeyond/solid-dnd";
import { useAppContext } from "@/lib/state-context";
import Mcq from "./mcq-question";
import Sortable from "./sortable";

const QuestionList: Component = () => {
  const { state, setState } = useAppContext();
  const [activeDragIndex, setActiveDragIndex] = createSignal<number | null>(
    null,
  );

  const onDragStart = ({ draggable }: DragEvent) =>
    setActiveDragIndex(draggable.id as number);

  const onDragEnd = ({ draggable, droppable }: DragEvent) => {
    if (draggable && droppable) {
      const fromIndex = (draggable.id as number) - 1;
      const toIndex = (droppable.id as number) - 1;

      if (fromIndex !== toIndex) {
        const updatedItems = state.questions.slice();
        updatedItems.splice(toIndex, 0, ...updatedItems.splice(fromIndex, 1));
        setState("questions", updatedItems);
      }
    }
  };

  return (
    <DragDropProvider
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      collisionDetector={closestCenter}
    >
      <DragDropSensors />
      <SortableProvider
        ids={Array.from(Array(state.questions.length).keys()).map((i) => i + 1)}
      >
        <ul class="space-y-4">
          {Array.from(Array(state.questions.length).keys()).map((i) => (
            <li>
              <Sortable index={i}>
                <Mcq index={i} />
              </Sortable>
            </li>
          ))}
        </ul>
      </SortableProvider>
      <DragOverlay>
        <Mcq index={(activeDragIndex() || 1) - 1} />
      </DragOverlay>
    </DragDropProvider>
  );
};

export default QuestionList;
