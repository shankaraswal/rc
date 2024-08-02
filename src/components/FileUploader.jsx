import React, { useState } from "react";
import axios from "axios";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const onFileChange = (event) => {
    setMessage("");
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("There was an error uploading the file!", error);
        setMessage("File upload failed.");
      });
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
};

export default FileUploader;
