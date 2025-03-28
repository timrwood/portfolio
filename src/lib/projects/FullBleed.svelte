<script lang="ts">
  import Img from '$lib/Img.svelte';

  interface Props {
    image: ImageWithColor;
  }

  let { image }: Props = $props();
</script>

<div class="relative right-1/2 left-1/2 m-[0_-50vw] w-[100vw]">
  <Img {image} alt="Full Bleed" class="w-full" />
</div>
