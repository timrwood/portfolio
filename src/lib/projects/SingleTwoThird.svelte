<script lang="ts">
  export let image: string;
  export let caption: string | null;
</script>

<div class="flex items-start px-3 py-24">
  <img src={image} alt="Three Quarter" class="w-2/3" />

  <div class="pl-12 text-l font-serif italic">
    {#if caption}
      {caption}
    {/if}
  </div>
</div>
