import { type Component } from "solid-js";

import { $typst } from "@myriaddreamin/typst.ts";
import { Button } from "@/components/ui/button";
import FileSaver from "file-saver";

const DownloadButton: Component<{ content: string }> = (props) => {
  const exportPdf = () =>
    $typst.pdf({ mainContent: props.content }).then((pdfData) => {
      if (!pdfData) {
        return;
      }
      const pdfFile = new Blob([pdfData], { type: "application/pdf" });
      FileSaver(pdfFile, "assessment.pdf");
    });

  return (
    <Button onClick={exportPdf} variant={"secondary"}>
      download as pdf
    </Button>
  );
};

export default DownloadButton;
