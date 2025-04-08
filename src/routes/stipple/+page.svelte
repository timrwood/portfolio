<script lang="ts">
  import { page } from '$app/state';

  import UploadImage from './UploadImage.svelte';
  import ListImages from './ListImages.svelte';

  let width = $state(1200);
  let height = $state(800);
  let mode = $state('multiply');
</script>

<UploadImage />
<ListImages />

<div class="flex gap-4 pb-4">
  <div class="font-bold">Width</div>
  <input type="number" bind:value={width} min="0" max="3000" step="20" />
  <input type="range" bind:value={width} min="0" max="3000" step="20" />
  <div class="font-bold">Height</div>
  <input type="number" bind:value={height} min="0" max="3000" step="20" />
  <input type="range" bind:value={height} min="0" max="3000" step="20" />

  <div>
    <label>
      <input type="radio" name="mode" value="multiply" bind:group={mode} />
      Multiply
    </label>
    <label>
      <input type="radio" name="mode" value="screen" bind:group={mode} />
      Screen
    </label>
  </div>
</div>

<div class="flex justify-center">
  <canvas class="max-w-full border-1" {width} {height}></canvas>
</div>
