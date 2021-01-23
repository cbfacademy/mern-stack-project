import React, { useRef } from "react";

const FileUploader = ({ onFileSelect }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations - NEED TO DEFINE!!!!
    onFileSelect(e.target.files[0]);
    // if (fileInput.size > 1024) {
    //   onFileSelectError({ error: "File size cannot exceed more than 1MB" });
    // } else onFileSelectSuccess(file);
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput}></input>
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
      ></button>
    </div>
  );
};

export default FileUploader;
