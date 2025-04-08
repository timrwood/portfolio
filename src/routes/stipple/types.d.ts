type UploadedImage = {
  data: ArrayBuffer;
  name: string;
  type: string;
  size: number;
  width: number;
  height: number;
};

type UploadedImageRow = {
  id: string;
  src: string;
  record: UploadedImage;
};
