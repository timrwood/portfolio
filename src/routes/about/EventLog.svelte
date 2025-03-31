<script lang="ts">
  import categories, { nowPercent, Event } from './events';

  let focusPercent = $state(nowPercent);

  function onpointermovecapture(event: PointerEvent) {
    const target = event.currentTarget as Element;
    const rect = target.getBoundingClientRect();
    const x = event.pageX - rect.left;
    focusPercent = x / rect.width;
  }

  function backgroundClassFor(event: Event) {
    if (focusPercent >= event.startPercent && focusPercent <= event.endPercent) {
      return 'bg-slate-600';
    } else {
      return 'bg-slate-300';
    }
  }
</script>

<div class="px-3" {onpointermovecapture}>
  <h2 class="pb-16 text-3xl font-bold tracking-widest uppercase">Life Timeline</h2>

  <div class="sticky top-0 z-10 -mt-16 border-b border-slate-300 bg-slate-50 pt-16 pb-2">
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

    <div
      style="left:{focusPercent * 100}%;"
      class="absolute bottom-0 h-12 border-x-2 border-slate-600"
    ></div>
  </div>

  {#each Object.values(categories) as category}
    <div style="padding-left:{nowPercent * 100}%;" class="ml-4 pt-8 pb-2 text-lg font-bold">
      {category.name}
    </div>
    {#each Object.entries(category.groups) as [name, events]}
      <div
        class="relative h-6 font-serif text-xs/6 italic hover:bg-slate-100 md:h-8 md:text-sm/8 lg:text-base/8"
      >
        <div style="left:{nowPercent * 100}%;" class="absolute top-0 ml-4">
          {name}
        </div>
        {#each events as event}
          <div
            style="left:{event.startPercent * 100}%;right:{(1 - event.endPercent) * 100}%;"
            class="absolute top-0 bottom-0 {backgroundClassFor(event)}"
          ></div>
        {/each}
      </div>
    {/each}
  {/each}
</div>
