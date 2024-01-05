<script lang="ts">
  import type { Intro } from '$lib/types';

  export let intro: Intro;
</script>

<div class="flex items-center pt-12 pb-24 px-3">
  <div class="w-1/2 pr-24">
    <h2 class="font-bold text-3xl pb-4">{intro.title}</h2>
    {#each intro.subtitle as subtitle}
      <h3 class="font-serif italic">{subtitle}</h3>
    {/each}
    {#each intro.description as description}
      <h3 class="font-serif pt-4 text-pretty max-w-prose">{description}</h3>
    {/each}
  </div>
  <div class="w-1/2">
    <img src={intro.image} alt="Intro" />
  </div>
</div>
