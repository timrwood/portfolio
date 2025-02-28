<script lang="ts">
  import Img from '$lib/Img.svelte';

  export let src: ImageWithColor;
  export let alt: string;
  export let className: string = '';
</script>

<Img image={src} {alt} class="block w-full {className}" />
