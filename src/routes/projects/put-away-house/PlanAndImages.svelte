<script lang="ts">
  import Img from '$lib/Img.svelte';
  import { SplitView } from '$lib/projects';

  export let plan: ImageWithLqip;
  export let photo1: ImageWithLqip;
  export let photo2: ImageWithLqip;
  export let photo3: ImageWithLqip;
  export let photo4: ImageWithLqip;
  export let title: string;
  export let subtitle: string;
</script>

<div
  class="m-[0_-50vw] w-[100vw] relative left-1/2 right-1/2 py-12 bg-[#8DA582] border-b-4 border-slate-50"
  style="background-color:#8DA582"
>
  <div class="xl:container mx-auto px-3">
    <SplitView align="top" spacing="1|2">
      <div slot="left">
        <div class="pb-4 text-2xl font-bold text-white w-full">{title}</div>
        <div class="text-l font-serif italic text-white w-full">{subtitle}</div>
      </div>
      <div slot="right" class="grid grid-cols-[4fr_3fr] grid-rows-4 gap-x-8 place-items-center">
        <Img image={plan} alt="{title} Plan" class="row-span-4 col-span-1 w-full" />
        <Img image={photo1} alt="Full Bleed" class="row-span-1 col-start-2 col-span-1 w-full" />
        <Img image={photo2} alt="Full Bleed" class="row-span-1 col-start-2 col-span-1 w-full" />
        <Img image={photo3} alt="Full Bleed" class="row-span-1 col-start-2 col-span-1 w-full" />
        <Img image={photo4} alt="Full Bleed" class="row-span-1 col-start-2 col-span-1 w-full" />
      </div>
    </SplitView>
  </div>
</div>
