import { Accessor, type Component, createResource } from "solid-js";

import { $typst } from "@myriaddreamin/typst.ts";

const SvgPreview: Component<{ contentSignal: Accessor<string> }> = (props) => {
  const getArtifactData = async (content: string) => {
    return await $typst.svg({ mainContent: content });
  };

  const [svg] = createResource(props.contentSignal, getArtifactData);

  return (
    <div>
      {svg() === undefined ? (
        "loading..."
      ) : (
        <div
          innerHTML={svg()}
          style={{ border: "1px solid black", width: "fit-content" }}
        ></div>
      )}
    </div>
  );
};

export default SvgPreview;
