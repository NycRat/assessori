import {
  Accessor,
  type Component,
  createResource,
  createSignal,
} from "solid-js";

import { $typst } from "@myriaddreamin/typst.ts";

let oldSvg = "";

const SvgPreview: Component<{ contentSignal: Accessor<string> }> = (props) => {
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

  const [svg] = createResource(props.contentSignal, getArtifactData);

  return (
    <div>
      {svg() === undefined ? (
        "loading..."
      ) : (
        <>
          {hasError() && <div>typst error...</div>}
          <div
            innerHTML={svg()}
            style={{ border: "1px solid black", width: "fit-content" }}
          />
        </>
      )}
    </div>
  );
};

export default SvgPreview;
