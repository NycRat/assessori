import { createSignal, type Component } from "solid-js";
import SvgPreview from "./SvgPreview";
import DownloadButton from "./DownloadButton";

const defaultContent =
  "#set text(40pt)\n\nHello !!\n\nThis is Typst in the browser !!\n\n$ integral_0^(10) e^x dif x = e^10 - 1 $";

const App: Component = () => {
  const [content, setContent] = createSignal(defaultContent);

  return (
    <div>
      <h1>assessori 📝</h1>

      <textarea
        onInput={(event) => {
          setContent(event.target.value);
        }}
        cols={50}
        rows={20}
      >
        {defaultContent}
      </textarea>

      <SvgPreview contentSignal={content} />
      <DownloadButton content={content()} />
    </div>
  );
};

export default App;
