<script lang="ts">
  import Img from '$lib/Img.svelte';
  import { SplitView } from '$lib/projects';

  interface Props {
    plan: ImageWithColor;
    photo1: ImageWithColor;
    photo2: ImageWithColor;
    photo3: ImageWithColor;
    photo4: ImageWithColor;
    title: string;
    subtitle: string;
  }

  let { plan, photo1, photo2, photo3, photo4, title, subtitle }: Props = $props();
</script>

<div
  class="relative right-1/2 left-1/2 m-[0_-50vw] w-[100vw] border-b-4 border-slate-50 bg-[#8DA582] py-12"
  style="background-color:#8DA582"
>
  <div class="mx-auto px-3 xl:container">
    <SplitView align="top" spacing="1|2">
      {#snippet left()}
        <div>
          <div class="w-full pb-4 text-2xl font-bold text-white">{title}</div>
          <div class="text-l w-full font-serif text-white italic">{subtitle}</div>
        </div>
      {/snippet}
      {#snippet right()}
        <div class="grid grid-cols-[4fr_3fr] grid-rows-4 place-items-center gap-x-8">
          <Img image={plan} alt="{title} Plan" class="col-span-1 row-span-4 w-full" />
          <Img image={photo1} alt="Full Bleed" class="col-span-1 col-start-2 row-span-1 w-full" />
          <Img image={photo2} alt="Full Bleed" class="col-span-1 col-start-2 row-span-1 w-full" />
          <Img image={photo3} alt="Full Bleed" class="col-span-1 col-start-2 row-span-1 w-full" />
          <Img image={photo4} alt="Full Bleed" class="col-span-1 col-start-2 row-span-1 w-full" />
        </div>
      {/snippet}
    </SplitView>
  </div>
</div>
