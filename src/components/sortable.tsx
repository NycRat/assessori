import { Component, JSX } from "solid-js";
import { createSortable, useDragDropContext } from "@thisbeyond/solid-dnd";

const Sortable: Component<{ index: number; children: JSX.Element }> = (
  props,
) => {
  // @ts-ignore
  const [dndState] = useDragDropContext();
  const sortable = createSortable(props.index + 1);

  return (
    <div
      // @ts-ignore
      use:sortable
      class="sortable"
      classList={{
        "opacity-25": sortable.isActiveDraggable,
        "transition-transform": !!dndState.active.draggable,
      }}
    >
      {props.children}
    </div>
  );
};

export default Sortable;
