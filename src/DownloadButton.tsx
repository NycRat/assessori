import { type Component } from "solid-js";

import { $typst } from "@myriaddreamin/typst.ts";

const DownloadButton: Component<{ content: string }> = (props) => {
  const exportPdf = () =>
    $typst.pdf({ mainContent: props.content }).then((pdfData) => {
      if (!pdfData) {
        return;
      }
      var pdfFile = new Blob([pdfData], { type: "application/pdf" });

      // Creates element with <a> tag
      const link = document.createElement("a");
      // Sets file content in the object URL
      link.href = URL.createObjectURL(pdfFile);
      // Sets file name
      link.target = "_blank";
      // Triggers a click event to <a> tag to save file.
      link.click();
      URL.revokeObjectURL(link.href);
    });

  return <button onClick={exportPdf}>download as pdf</button>;
};

export default DownloadButton;
