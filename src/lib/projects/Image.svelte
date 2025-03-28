<script lang="ts">
  import Img from '$lib/Img.svelte';

  interface Props {
    src: ImageWithColor;
    alt: string;
    className?: string;
  }

  let { src, alt, className = '' }: Props = $props();
</script>

<Img image={src} {alt} class="block w-full {className}" />
