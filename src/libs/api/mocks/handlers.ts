import { http } from "msw";
import { uploadFileInit } from "./resolver";

export const handlers = [http.post("/api/v1/upload/init", uploadFileInit)];
