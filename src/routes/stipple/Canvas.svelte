<script lang="ts">
  import LayerStore from './db/LayerStore.svelte';
  import { DrawLayer } from './draw/DrawLayer';

  interface Props {
    layerStore: LayerStore;
    canvasState: MainCanvasState;
  }

  let { layerStore, canvasState }: Props = $props();

  let canvas: HTMLCanvasElement;

  $effect(() => {
    canvas.width = canvasState.width;
    canvas.height = canvasState.height;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.globalCompositeOperation = canvasState.mode;

    const drawLayers = layerStore.layers.map((imageLayer) => new DrawLayer(imageLayer, canvas));

    let timeout = 0;
    let i = 0;
    let ratio = 0.05;
    let total = canvas.width * ratio;

    function draw() {
      i++;
      for (let y = 0; y < canvas.height; y++) {
        drawLayers.forEach((dl) => dl.drawAtY(y, i / total));
      }
    }

    function load() {
      return Promise.all(drawLayers.map((dl) => dl.load()));
    }

    function setup() {
      return drawLayers.forEach((dl) => dl.drawIntoCanvas());
    }

    function tick() {
      if (i >= canvas.width) return;

      draw();

      timeout = setTimeout(tick);
    }

    load().then(setup).then(tick);

    return () => clearTimeout(timeout);
  });
</script>

<canvas class="max-w-full border-1" bind:this={canvas}></canvas>
