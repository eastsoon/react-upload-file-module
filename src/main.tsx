import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router/root.tsx";

async function init() {
  if (!import.meta.env.DEV) {
    return;
  }
  const { worker } = await import("./libs/api/mocks/browser.ts");

  await worker.start();
}

init().then(() =>
  createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
  )
);
