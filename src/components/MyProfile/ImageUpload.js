import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useState } from 'react';

const ImageUpload = ({setImage}) => {
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
      setImage(fileList);
    }
    setImage(fileList);

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        maxCount={1}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};

export default ImageUpload;