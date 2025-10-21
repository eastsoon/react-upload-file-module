import { useState } from "react";
import { UploadPicture } from "./components/UploadPicture";
import axios from "axios";

function App() {
  const [files, setFiles] = useState<Blob[]>([]);

  const handleUpload = () => {
    axios.post(
      "/api/v1/upload/init",
      { file: files[0] },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    console.log("uploaded");
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-screen">
      <UploadPicture setFiles={setFiles} />
      <button
        className="bg-blue-500 text-white p-2 rounded-md mt-4"
        onClick={handleUpload}
      >
        업로드
      </button>
    </div>
  );
}

export default App;
