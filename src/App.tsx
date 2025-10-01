import { UploadPicture } from "./components/UploadPicture"

function App() {
  const handleUpload = () => {
    console.log('upload')
  }
  return <div className="flex flex-col items-center justify-center min-w-screen">
    <UploadPicture />
    <button className="bg-blue-500 text-white p-2 rounded-md mt-4" onClick={handleUpload}>Upload</button>
  </div>
}

export default App
