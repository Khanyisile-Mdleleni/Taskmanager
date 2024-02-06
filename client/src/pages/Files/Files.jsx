import React, { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const Files = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    // Retrieve the file list from localStorage
    const storedFiles = localStorage.getItem("uploadedFiles");
    if (storedFiles) {
      setFileList(JSON.parse(storedFiles));
    }
  }, []);

  const saveFileListToLocalStorage = (files) => {
    // Save the file list to localStorage
    localStorage.setItem("uploadedFiles", JSON.stringify(files));
  };

  const props = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    fileList: fileList,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }

      // Update the fileList state and save to localStorage
      setFileList(info.fileList);
      saveFileListToLocalStorage(info.fileList);
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
    </Dragger>
  );
};

export default Files;
