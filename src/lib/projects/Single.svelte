<script lang="ts">
  export let image: string;
  export let caption: string | null = null;
  export let description: string[] = [];
  export let direction: 'left' | 'right' = 'left';
  export let spacing: 'half' | 'third' = 'half';

  let itemsAlign = description.length ? 'items-center' : 'items-end';
</script>

<div class="px-3 py-24">
  <div class="flex gap-24 {itemsAlign} {direction == 'left' ? 'flex-row' : 'flex-row-reverse'}">
    <div class={spacing == 'half' ? 'w-1/2' : 'w-2/3'}>
      <img src={image} alt="Three Quarter" />
    </div>

    <div class={spacing == 'half' ? 'w-1/2' : 'w-1/3'}>
      {#if caption}
        <div class="text-l font-serif italic max-w-prose text-pretty">
          {caption}
        </div>
      {/if}

      {#each description as paragraph}
        <p class="font-serif pt-4 text-pretty max-w-prose">{paragraph}</p>
      {/each}
    </div>
  </div>
</div>
