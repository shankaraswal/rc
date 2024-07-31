import "./App.css";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
function App() {
  const uploader = Uploader({
    apiKey: "free",
  });

  const options = { multi: true };

  return (
    <div className="App">
      <div className="App-header">
        <header>This is App compoennt</header>
        <UploadButton
          uploader={uploader}
          options={options}
          onComplete={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
        >
          {({ onClick }) => <button onClick={onClick}>Upload a file...</button>}
        </UploadButton>
      </div>
    </div>
  );
}

export default App;
