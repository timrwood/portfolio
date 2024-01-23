<script lang="ts">
  import Img from '$lib/Img.svelte';

  export let image: ImageWithLqip;
</script>

<div class="m-[0_-50vw] w-[100vw] relative left-1/2 right-1/2">
  <Img {image} alt="Full Bleed" class="w-full" />
</div>
