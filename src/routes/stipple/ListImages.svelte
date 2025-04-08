<script lang="ts">
  import { list } from './db/list';
  import { onMount } from 'svelte';

  let rows: UploadedImageRow[] = $state([]);

  onMount(async () => {
    rows = await list();
  });
</script>

<div class="flex flex-wrap gap-2">
  {#each rows as row}
    <img class="h-20 w-auto" src={row.src} width={row.record.width} height={row.record.height} />
  {/each}
</div>
