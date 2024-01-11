<script lang="ts">
  export let plan: string;
  export let photo1: string;
  export let photo2: string;
  export let photo3: string;
  export let photo4: string;
  export let title: string;
  export let subtitle: string;
</script>

<div
  class="m-[0_-50vw] w-[100vw] relative left-1/2 right-1/2 py-12 bg-[#8DA582] border-b-4 border-slate-50"
  style="background-color:#8DA582"
>
  <div class="container mx-auto">
    <div class="grid grid-cols-[4fr_3fr_3fr] grid-rows-4 gap-x-12 place-items-center">
      <img src={plan} alt="Full Bleed" class="row-span-4 col-span-1" />
      <img src={photo1} alt="Full Bleed" class="row-span-1 col-start-2 col-span-1" />
      <img src={photo2} alt="Full Bleed" class="row-span-1 col-start-2 col-span-1" />
      <img src={photo3} alt="Full Bleed" class="row-span-1 col-start-2 col-span-1" />
      <img src={photo4} alt="Full Bleed" class="row-span-1 col-start-2 col-span-1" />
      <div class="row-start-1 row-end-1 col-start-3 col-span-1 justify-self-start">
        <div class="pb-4 text-2xl font-bold text-white w-full">{title}</div>
        <div class="text-l font-serif italic text-white w-full">{subtitle}</div>
      </div>
    </div>
  </div>
</div>
