import { createBrowserRouter } from "react-router";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/upload",
    element: <App />,
  },
]);

export default router;
