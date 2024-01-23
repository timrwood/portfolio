<script>
  import categories, { nowPercent } from './events';
</script>

<svelte:head>
  <title>Tim Wood | About Me</title>
</svelte:head>

<div class="px-3">
  <h2 class="font-bold text-3xl py-8 mb-16 text-center tracking-widest uppercase">About Me</h2>

  <div class="sticky top-0 z-10 pb-2 pt-16 -mt-16 bg-slate-50 border-b border-slate-300">
    <div class="flex justify-between text-sm sm:text-base">
      <div>Birth</div>
      <div>Death (projected)</div>
    </div>
    <div class="flex justify-between font-bold">
      <div>0</div>
      <div>10</div>
      <div>20</div>
      <div>30</div>
      <div>40</div>
      <div>50</div>
      <div>60</div>
      <div>70</div>
      <div>80</div>
    </div>
  </div>

  {#each Object.values(categories) as category}
    <div style="padding-left:{nowPercent * 100}%;" class="ml-4 font-bold text-lg pt-8 pb-2">
      {category.name}
    </div>
    {#each Object.entries(category.groups) as [name, events]}
      <div
        class="relative h-6 text-xs/6 md:h-8 md:text-sm/8 lg:text-base/8 border-t border-slate-300 font-serif italic"
      >
        <div style="left:{nowPercent * 100}%;" class="absolute top-0 ml-4">
          {name}
        </div>
        {#each events as event}
          <div
            style="left:{event.startPercent * 100}%;right:{(1 - event.endPercent) * 100}%;"
            class="absolute top-0 bottom-0 bg-slate-300"
          />
        {/each}
      </div>
    {/each}
  {/each}
</div>
