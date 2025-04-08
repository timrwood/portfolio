type ImageLayer = {
  data: ArrayBuffer;
  src: string;
  name: string;
  width: number;
  height: number;
  color: string;
  enabled: boolean;
};

type MainCanvasState = {
  width: number;
  height: number;
  mode: 'multiply' | 'screen';
};
