import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImageEdit from "filepond-plugin-image-edit";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageResize from "filepond-plugin-image-resize";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import type { FilePondFile } from "filepond";

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageEdit,
  FilePondPluginFileValidateType,
  FilePondPluginImageExifOrientation,
  FilePondPluginImageCrop,
  FilePondPluginImageResize
);

export const UploadPicture = ({
  setFiles,
}: {
  setFiles: (files: Blob[]) => void;
}) => {
  // const serverConfig = {
  //   process: (fieldName: string, file: File, metadata: any, load: any) => {
  //     return load(file)
  //   }
  // }

  const handleUpdateFiles = (fileItems: FilePondFile[]) => {
    const blobs = fileItems.map((fileItem) => fileItem.source as Blob);
    console.log(blobs[0]);
    setFiles(blobs as Blob[]);
  };

  return (
    <div className="min-w-96 min-h-96 border-2 border-gray-300 rounded-md p-4">
      <FilePond
        imagePreviewHeight={400}
        imageResizeTargetWidth={300}
        imageResizeTargetHeight={400}
        allowMultiple={false}
        allowImagePreview={true}
        onupdatefiles={handleUpdateFiles}
        maxFiles={1}
        labelIdle="사진 업로드"
        acceptedFileTypes={["image/jpeg", "image/png", "image/jpg"]}
        fileValidateTypeLabelExpectedTypes="jpg, png, jpeg로 업로드해 주세요."
        labelFileTypeNotAllowed="jpg, png, jpeg 파일을 업로드 해주세요."
      />
    </div>
  );
};
