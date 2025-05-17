import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import "./index.css";
import App from "./App";

import { $typst } from "@myriaddreamin/typst.ts";
import NotFoundPage from "./NotFoundPage";
import MainPage from "./MainPage";

$typst.setCompilerInitOptions({
  getModule: () =>
    "https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-web-compiler/pkg/typst_ts_web_compiler_bg.wasm",
});
$typst.setRendererInitOptions({
  getModule: () =>
    "https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-renderer/pkg/typst_ts_renderer_bg.wasm",
});

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Root element not found.");
}

render(
  () => (
    <Router root={App}>
      <Route path="/assessori/" component={MainPage} />
      <Route path="*" component={NotFoundPage} />
    </Router>
  ),
  root!,
);
