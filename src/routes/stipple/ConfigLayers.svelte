<script lang="ts">
  import ListImage from './ConfigLayer.svelte';

  let { layerStore } = $props();
</script>

{#each layerStore.layers as layer}
  <ListImage {layer} {layerStore} />
{/each}
