<script lang="ts">
  import Img from '$lib/Img.svelte';

  export let src: ImageWithColor;
  export let alt: string;
</script>

<Img image={src} {alt} class="block w-full" />
