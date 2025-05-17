/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

import { $typst } from "@myriaddreamin/typst.ts";

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

render(() => <App />, root!);
