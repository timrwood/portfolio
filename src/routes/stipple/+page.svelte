<script lang="ts">
  import { page } from '$app/state';
  import { replaceState } from '$app/navigation';

  let width = $state(page.url.searchParams.get('w') ?? 600);
  let height = $state(page.url.searchParams.get('h') ?? 600);
  let mode = $state('multiply');

  $effect(() => {
    page.url.searchParams.set('w', `${width}`);
    page.url.searchParams.set('h', `${height}`);
    page.url.searchParams.set('m', mode);
    replaceState(page.url, page.state);
  });
</script>

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
