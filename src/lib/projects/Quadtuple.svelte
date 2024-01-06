<script lang="ts">
  export let image1: string;
  export let image2: string;
  export let image3: string;
  export let image4: string;
  export let caption: string | null = null;
  export let direction: 'left' | 'right' = 'left';
  export let description: string[] = [];
  export let spacing: 'half' | 'third' = 'half';

  let itemsAlign = description.length ? 'items-center' : 'items-start';
</script>

<div class="px-3 py-24">
  <div class="flex gap-24 {itemsAlign} {direction == 'left' ? 'flex-row' : 'flex-row-reverse'}">
    <div class={spacing == 'half' ? 'w-1/2' : 'w-2/3'}>
      <div class="grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-12 place-items-center">
        <img src={image1} alt="Three Quarter" />
        <img src={image2} alt="Three Quarter" />
        <img src={image3} alt="Three Quarter" />
        <img src={image4} alt="Three Quarter" />
      </div>
    </div>
    <div class={spacing == 'half' ? 'w-1/2' : 'w-1/3'}>
      {#each description as paragraph}
        <p class="font-serif pt-4 text-pretty max-w-prose">{@html paragraph}</p>
      {/each}
      {#if caption}
        <div class="pb-12 text-l font-serif italic max-w-prose text-pretty">{caption}</div>
      {/if}
    </div>
  </div>
</div>
