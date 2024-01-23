<script lang="ts">
  import Img from '$lib/Img.svelte';

  export let src1: ImageWithLqip;
  export let src2: ImageWithLqip;
  export let src3: ImageWithLqip;
  export let src4: ImageWithLqip;

  export let alt1: string;
  export let alt2: string;
  export let alt3: string;
  export let alt4: string;
</script>

<div class="grid grid-cols-2 grid-rows-2 gap-8 lg:gap-16 place-items-center">
  <Img image={src1} alt={alt1} />
  <Img image={src2} alt={alt2} />
  <Img image={src3} alt={alt3} />
  <Img image={src4} alt={alt4} />
</div>
