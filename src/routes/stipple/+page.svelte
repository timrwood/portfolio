<script lang="ts">
  // import { page } from '$app/state';
  import { onMount } from 'svelte';

  import LayerStore from './db/LayerStore.svelte';
  import Canvas from './Canvas.svelte';

  import UploadImage from './UploadImage.svelte';
  import ListImages from './ConfigLayers.svelte';

  let layerStore = new LayerStore('stipple', 'images');

  let canvasState: MainCanvasState = $state({ width: 1200, height: 800, mode: 'multiply' });

  onMount(async () => {
    layerStore.refresh();
  });
</script>

<div class="flex gap-4 pb-4">
  <div class="font-bold">Width</div>
  <input type="number" bind:value={canvasState.width} min="0" max="3000" step="20" />
  <input type="range" bind:value={canvasState.width} min="0" max="3000" step="20" />
  <div class="font-bold">Height</div>
  <input type="number" bind:value={canvasState.height} min="0" max="3000" step="20" />
  <input type="range" bind:value={canvasState.height} min="0" max="3000" step="20" />

  <div>
    <label>
      <input type="radio" name="mode" value="multiply" bind:group={canvasState.mode} />
      Multiply
    </label>
    <label>
      <input type="radio" name="mode" value="screen" bind:group={canvasState.mode} />
      Screen
    </label>
  </div>
</div>

<div class="flex justify-center">
  <Canvas {canvasState} {layerStore} />
</div>

<UploadImage {layerStore} />
<ListImages {layerStore} />
