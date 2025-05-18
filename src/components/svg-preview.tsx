import {
  Component,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";

import { $typst } from "@myriaddreamin/typst.ts";

let oldSvg = "";

const SvgPreview: Component<{ content: string }> = (props) => {
  const [hasError, setHasError] = createSignal(false);

  const getArtifactData = async (content: string) => {
    try {
      const svg = await $typst.svg({ mainContent: content });
      oldSvg = svg;
      setHasError(false);
      return svg;
    } catch {
      setHasError(true);
      return oldSvg;
    }
  };

  const [c, sc] = createSignal("");
  const [svg] = createResource(c, getArtifactData);

  createEffect(() => {
    sc(props.content);
  });

  return (
    <div>
      {svg() === undefined ? (
        "loading..."
      ) : (
        <div class="relative">
          {hasError() && (
            <div class="absolute bg-destructive text-secondary-foreground p-1 bottom-0">
              typst error...
            </div>
          )}
          <div innerHTML={svg()} class="border w-fit" />
        </div>
      )}
    </div>
  );
};

export default SvgPreview;
