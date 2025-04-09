export class DrawLayer {
  image: HTMLImageElement;
  imageLayer: ImageLayer;
  canvas: HTMLCanvasElement;
  targetCanvas: HTMLCanvasElement;
  targetContext: CanvasRenderingContext2D;
  context: CanvasRenderingContext2D;
  imageData: Uint8ClampedArray = new Uint8ClampedArray();
  yTotals: number[] = [];

  constructor(imageLayer: ImageLayer, targetCanvas: HTMLCanvasElement) {
    this.imageLayer = imageLayer;

    this.targetCanvas = targetCanvas;
    this.targetContext = targetCanvas.getContext('2d') as CanvasRenderingContext2D;

    this.canvas = document.createElement('canvas');
    this.canvas.width = this.targetCanvas.width;
    this.canvas.height = this.targetCanvas.height;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.image = new Image();
    this.image.src = this.imageLayer.src;
  }

  drawIntoCanvas() {
    const { width, height } = this.targetCanvas;
    const targetRatio = width / height;
    const selfRatio = this.imageLayer.width / this.imageLayer.height;

    let w, h, x, y;

    if (targetRatio > selfRatio) {
      w = width;
      h = w / selfRatio;
      x = 0;
      y = (height - h) / 2;
    } else {
      h = height;
      w = h * selfRatio;
      y = 0;
      x = (width - w) / 2;
    }

    console.log({ x, y, w, h });

    this.context.drawImage(this.image, x, y, w, h);
    this.imageData = this.context.getImageData(0, 0, width, height).data;
    this.calculateYPercents();
  }

  calculateYPercents() {
    const { width, height } = this.targetCanvas;
    const pixels = this.imageData;

    for (let y = 0; y < height; y++) {
      let value = 0;
      for (let x = 0; x < width; x++) {
        value += this.valueAt(x, y);
      }
      this.yTotals[y] = value;
    }
  }

  valueAt(x: number, y: number) {
    const pixel = (y * this.targetCanvas.width + x) * 4;
    let value = this.imageData[pixel] + this.imageData[pixel + 1] + this.imageData[pixel + 2];
    value = 765 - value;
    return value;
  }

  drawAtY(y: number, percent: number) {
    const yTotal = this.yTotals[y] || 0;
    const width = this.targetCanvas.width;
    const context = this.targetContext;

    const pointScaleMin = 2;
    const pointScaleMax = 20;

    if (yTotal < percent * 255 * width * 3) return;

    const targetValue = Math.random() * yTotal;

    let valuesToLeft = 0;

    for (let x = 0; x < width; x++) {
      const value = this.valueAt(x, y);
      valuesToLeft += value;

      if (valuesToLeft > targetValue) {
        const size = Math.sqrt((value * (pointScaleMax - pointScaleMin)) / 255);

        context.fillStyle = this.imageLayer.color;
        context.beginPath();
        context.ellipse(
          x + Math.random(),
          y + Math.random(),
          size / 2,
          size / 2,
          0,
          0,
          Math.PI * 2
        );
        context.fill();

        break;
      }
    }
  }

  async load() {
    return new Promise((resolve) => {
      if (this.image.complete) {
        resolve(this);
      } else {
        this.image.onload = () => resolve(this);
      }
    });
  }
}
