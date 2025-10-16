import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

async function init() {
  if (!import.meta.env.DEV) {
    return;
  }
  const { worker } = await import("./libs/api/mocks/browser.ts");

  await worker.start();
}

init().then(() =>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
);
