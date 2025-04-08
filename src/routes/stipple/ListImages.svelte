<script lang="ts">
  import ListImage from './ListImage.svelte';

  let { layerStore } = $props();
</script>

{#each layerStore.layers as layer}
  <ListImage {layer} {layerStore} />
{/each}
