import React from 'react';

import {
    FileUpload,
    FileUploadLabel,
    UploadIcon
  } from './upload-button.elements';

const UploadButtonComponent = ({handleChange, label, ...otherProps}) =>  {

    return (
    
    <div>
        <FileUpload type="file" name="file" id="uploadbuttonid" onChange={handleChange} {...otherProps}  />
        <FileUploadLabel for="uploadbuttonid" ><UploadIcon />Upload</FileUploadLabel>
    </div>

    )
}
export default UploadButtonComponent;