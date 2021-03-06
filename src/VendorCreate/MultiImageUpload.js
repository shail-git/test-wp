import React, { Component } from "react";
import './v_create.css';
export default class MultiImageUpload extends Component {
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);
    this.state = {
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e) {
    this.fileArray = [];
    this.fileObj.push(e.target.files);
    for (let j = 0; j < this.fileObj.length; j++) {
      for (let i = 0; i < this.fileObj[j].length; i++) {
        this.fileArray.push(URL.createObjectURL(this.fileObj[j][i]));
      }
    }
    this.setState({ file: this.fileArray });
  }

  uploadFiles(e) {
    e.preventDefault();
    console.log(this.state.file); //get the files from this variable
  }

  render() {
    return (
      <form>
        <div className="form-group multi-preview">
          {(this.fileArray || []).map((url) => (
            <img
              src={url}
              alt="..."
              height="130px"
              width="auto"
              style={{ margin: "2px" }}
            />
          ))}
        </div>

        <div className="form-group">
          <input
            type="file"
            className="form-control"
            class="form-control"
            onChange={this.uploadMultipleFiles}
            multiple
          />
        </div>
        <button
          type="button"
          className="btn submit_btn"
          onClick={this.uploadFiles}
        >
          Upload
        </button>
      </form>
    );
  }
}
