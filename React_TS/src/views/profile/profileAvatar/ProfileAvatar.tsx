import { Avatar, Upload } from 'antd';

import type { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/es/upload/interface';

export const ProfileAvatar: React.FC<any> = ({ url, onChange }) => {
  

  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    getBase64(info.file.originFileObj as RcFile, url => {
      onChange(url); 
    });
  };
  return (
    <Upload
      action="localhost:3000"
      listType="picture-card"
      onChange={handleChange}
      showUploadList={false}
      accept=".jpeg, .png, .jpg"
    >
      <Avatar src={url} size={100}/>
    </Upload>

  );
};
