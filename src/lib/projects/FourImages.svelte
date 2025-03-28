<script lang="ts">
  import Img from '$lib/Img.svelte';

  interface Props {
    src1: ImageWithColor;
    src2: ImageWithColor;
    src3: ImageWithColor;
    src4: ImageWithColor;
    alt1: string;
    alt2: string;
    alt3: string;
    alt4: string;
  }

  let { src1, src2, src3, src4, alt1, alt2, alt3, alt4 }: Props = $props();
</script>

<div class="grid grid-cols-2 grid-rows-2 place-items-center gap-8 lg:gap-16">
  <Img image={src1} alt={alt1} />
  <Img image={src2} alt={alt2} />
  <Img image={src3} alt={alt3} />
  <Img image={src4} alt={alt4} />
</div>
