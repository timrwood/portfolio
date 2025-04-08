export class DrawLayer {
  image: HTMLImageElement;
  imageLayer: ImageLayer;
  canvas: HTMLCanvasElement;
  targetCanvas: HTMLCanvasElement;
  targetContext: CanvasRenderingContext2D;
  context: CanvasRenderingContext2D;
  imageData: Uint8ClampedArray = new Uint8ClampedArray();
  killed = false;
  y = 0;

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
    const targetRatio = this.targetCanvas.width / this.targetCanvas.height;
    const selfRatio = this.imageLayer.width / this.imageLayer.height;

    let w, h, x, y;

    if (targetRatio > selfRatio) {
      w = this.targetCanvas.width;
      h = w / selfRatio;
      x = 0;
      y = (this.targetCanvas.height - h) / 2;
    } else {
      h = this.targetCanvas.height;
      w = h * selfRatio;
      y = 0;
      x = (this.targetCanvas.width - w) / 2;
    }

    console.log({ x, y, w, h });

    this.context.drawImage(this.image, x, y, w, h);
    // this.targetContext.drawImage(this.image, x, y, w, h);
    this.imageData = this.context.getImageData(
      0,
      0,
      this.targetCanvas.width,
      this.targetCanvas.height
    ).data;
  }

  stipple() {
    setTimeout(() => {
      this.y = this.y + 1;
      this.next();
    }, 0);
  }

  next() {
    if (this.killed) return;
    if (this.y > this.canvas.height) return;

    let y = this.y;

    this.targetContext.fillStyle = this.imageLayer.color;
    let total = 0;
    const ratio = 1600;

    const pointScaleMin = 5;
    const pointScaleMax = 50;

    const height = this.canvas.height;
    const width = this.canvas.width;

    const pixels = this.imageData;
    const values = [];

    for (let x = 0; x < width; x++) {
      const pixel = (y * width + x) * 4;
      let value = pixels[pixel] + pixels[pixel + 1] + pixels[pixel + 2];
      value = value / 3;
      value = 255 - value;
      total += value;
      values.push(value);
    }

    const count = total / ratio;

    for (let i = 0; i < count; i++) {
      const point = Math.random() * total;
      let run = 0;
      for (let j = 0; j < values.length; j++) {
        run += values[j];

        if (run > point) {
          const x = (j % width) + Math.random() - 0.5;

          const pointScale = Math.sqrt((values[j] * (pointScaleMax - pointScaleMin)) / 255);

          // const size = pointScaleMin + Math.random() * pointScale;
          const size = pointScale;

          this.targetContext.beginPath();
          this.targetContext.ellipse(x, y + Math.random(), size / 2, size / 2, 0, 0, Math.PI * 2);
          this.targetContext.fill();

          break;
        }
      }
    }
    this.stipple();
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
