<script lang="ts">
  export let image: string;
  export let caption: string | null;
</script>

<div class="flex items-start px-3 py-24">
  <img src={image} alt="Three Quarter" class="w-1/2" />

  <div class="pl-12 text-l font-serif italic max-w-prose text-pretty">
    {#if caption}
      {caption}
    {/if}
  </div>
</div>
