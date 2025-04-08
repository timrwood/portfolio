<script lang="ts">
  import LayerStore from './db/LayerStore.svelte';

  interface Props {
    layerStore: LayerStore;
    layer: ImageLayer;
  }

  let { layerStore, layer }: Props = $props();

  async function onchangeColor(event: Event) {
    const input = event.target as HTMLInputElement;
    layer.color = input.value;
    await layerStore.put(layer);
  }

  function deleteLayer() {
    layerStore.delete(layer);
  }
</script>

<div class="flex flex-wrap gap-2">
  <img
    class="h-20 w-auto"
    src={layer.src}
    width={layer.width}
    height={layer.height}
    alt="Uploaded"
  />
  <input type="color" value={layer.color} onchange={onchangeColor} />

  <button onclick={deleteLayer}>Delete</button>
</div>
