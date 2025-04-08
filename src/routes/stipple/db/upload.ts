import { load } from './db';

type Dimensions = {
  width: number;
  height: number;
};

type Metadata = {
  data: ArrayBuffer;
  name: string;
  type: string;
  size: number;
};

async function findDimensions(file: File): Promise<Dimensions> {
  return new Promise(function (resolve) {
    const image = new Image();
    image.onload = () => resolve({ width: image.width, height: image.height });
    image.onerror = (event) => console.error(event);
    image.src = URL.createObjectURL(file);
  });
}

async function findMetadata(file: File): Promise<Metadata> {
  return new Promise(function (resolve) {
    const reader = new FileReader();
    reader.onload = function () {
      resolve({
        name: file.name,
        type: file.type,
        size: file.size,
        data: reader.result as ArrayBuffer
      });
    };
    reader.onerror = (event) => console.error(event);
    reader.readAsArrayBuffer(file);
  });
}

export async function process(file: File): Promise<UploadedImage> {
  const { width, height } = await findDimensions(file);
  const { data, name, size, type } = await findMetadata(file);

  return { data, name, size, type, width, height };
}

export async function uploadImage(file: File) {
  const uploadedImage = await process(file);
  const db = await load();
  const store = db.transaction('images', 'readwrite').objectStore('images');
  store.add(uploadedImage);
}
