<script>
  import categories, { nowPercent } from './events';
</script>

<div class="px-3">
  <div class="flex sticky top-12 z-10 py-4 bg-slate-50/90 backdrop-blur-sm text-sm font-bold">
    <div class="flex-1">Birth</div>
    <div class="flex-1">10</div>
    <div class="flex-1">20</div>
    <div class="flex-1">30</div>
    <div class="flex-1">40</div>
    <div class="flex-1">50</div>
    <div class="flex-1">60</div>
    <div class="flex-1 flex justify-between">
      <div>70</div>
      <div>Death</div>
    </div>
  </div>

  {#each Object.values(categories) as category}
    <div class="relative h-8 font-bold">
      <div style="left:{nowPercent * 100}%;" class="absolute bottom-0 ml-4">
        {category.name}
      </div>
    </div>
    {#each Object.entries(category.groups) as [name, events]}
      <div
        class="relative h-6 md:h-8 border-t border-slate-300 leading-6 md:leading-8 lg:leading-8 text-xs md:text-sm lg:text-base font-serif italic"
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
