<script lang="ts">
  import { process } from './db/process';
  import LayerStore from './db/LayerStore.svelte';
  interface Props {
    layerStore: LayerStore;
  }

  let { layerStore }: Props = $props();

  async function onchange(event: Event) {
    const input = event.target as HTMLInputElement;
    for (let file of input.files || []) {
      const layer = await process(file);
      layerStore.put(layer);
    }
  }
</script>

<input class="w-full border p-10" type="file" {onchange} />
