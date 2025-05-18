import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import "./index.css";
import App from "./app";

import { $typst } from "@myriaddreamin/typst.ts";
import NotFoundPage from "./not-found-page";
import SourcePage from "./source-page";
import HomePage from "./home-page";
import ComposePage from "./compose-page";

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
      <Route path="/assessori/" component={HomePage} />
      <Route path="/assessori/compose/" component={ComposePage} />
      <Route path="/assessori/source/" component={SourcePage} />
      <Route path="*" component={NotFoundPage} />
    </Router>
  ),
  root!,
);
