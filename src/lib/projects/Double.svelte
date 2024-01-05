<script lang="ts">
  export let image1: string;
  export let image2: string;
  export let caption: string | null = null;
  export let direction: 'left' | 'right' = 'left';
  export let spacing: 'half' | 'third' = 'half';
</script>

<div class="px-3 py-24">
  <div class="flex items-end gap-24 {direction == 'left' ? 'flex-row' : 'flex-row-reverse'}">
    <div class={spacing == 'half' ? 'w-1/2' : 'w-2/3'}>
      <img src={image1} alt="Three Quarter" class="w-full" />
    </div>
    <div class={spacing == 'half' ? 'w-1/2' : 'w-1/3'}>
      {#if caption}
        <div class="pb-12 text-l font-serif italic max-w-prose text-pretty">{caption}</div>
      {/if}
      <img src={image2} alt="Three Quarter" class="w-full" />
    </div>
  </div>
</div>
