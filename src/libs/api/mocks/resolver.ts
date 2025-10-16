import { HttpResponse, delay } from "msw";

// function withDelay<
//   Params extends PathParams,
//   ReuqestBodyType extends DefaultBodyType,
//   ResponseBodyType extends DefaultBodyType,
// >(
//   duration: number,
//   resolver: HttpResponseResolver<Params, ReuqestBodyType, ResponseBodyType>
// ): HttpResponseResolver<Params, ReuqestBodyType, ResponseBodyType> {
//   return async (...args) => {
//     await delay(duration);
//     return resolver(...args);
//   };
// }

export const uploadFileInit = async ({ request }: { request: Request }) => {
  const data = await request.formData();

  const file = data.get("file");
  if (!file) {
    return HttpResponse.json({ error: "File is required" }, { status: 400 });
  }

  if (file instanceof File) {
    const fileData = await file.arrayBuffer();
    console.log(fileData);
  }

  console.log(data);

  await delay(200);
  return HttpResponse.json({ message: "Uploaded" }, { status: 200 });
};
