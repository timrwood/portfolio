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

    Promise.all(drawLayers.map((dl) => dl.load())).then(() => {
      drawLayers.forEach((dl) => {
        dl.drawIntoCanvas();
        dl.stipple();
      });
    });

    return () => {
      drawLayers.forEach((dl) => (dl.killed = true));
    };
  });
</script>

<canvas class="max-w-full border-1" bind:this={canvas}></canvas>
