import { createSignal, type Component } from "solid-js";
import SvgPreview from "./SvgPreview";
import DownloadButton from "./DownloadButton";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import AppSidebar from "./AppSidebar";

const defaultContent =
  "#set text(40pt)\n\nHello !!\n\nThis is Typst in the browser !!\n\n$ integral_0^(10) e^x dif x = e^10 - 1 $";

const App: Component = () => {
  const [content, setContent] = createSignal(defaultContent);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main class="p-12 flex gap-2">
        <textarea
          class="border bg-card p-2"
          onInput={(event) => {
            setContent(event.target.value);
          }}
          cols={80}
        >
          {defaultContent}
        </textarea>

        <div class="space-y-2">
          <SvgPreview contentSignal={content} />
          <DownloadButton content={content()} />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default App;
