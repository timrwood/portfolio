async function findDimensions(file: File, layer: ImageLayer): Promise<ImageLayer> {
  return new Promise(function (resolve) {
    const image = new Image();
    image.onload = function () {
      layer.width = image.width;
      layer.height = image.height;
      resolve(layer);
    };
    image.onerror = (event) => console.error(event);
    image.src = URL.createObjectURL(file);
  });
}

async function findMetadata(file: File, layer: ImageLayer): Promise<ImageLayer> {
  return new Promise(function (resolve) {
    const reader = new FileReader();
    reader.onload = function () {
      layer.data = reader.result as ArrayBuffer;
      resolve(layer);
    };
    reader.onerror = (event) => console.error(event);
    reader.readAsArrayBuffer(file);
  });
}

export async function process(file: File): Promise<ImageLayer> {
  const layer: ImageLayer = {
    data: new ArrayBuffer(),
    src: '',
    name: file.name,
    width: 0,
    height: 0,
    color: '#000',
    enabled: true
  };

  await findDimensions(file, layer);
  await findMetadata(file, layer);

  return layer;
}
