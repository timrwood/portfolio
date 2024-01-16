<script lang="ts">
  import type { Intro } from '$lib/types';

  export let intro: Intro;
</script>

<div class="flex flex-col lg:flex-row items-center py-12 lg:py-24 px-3 gap-12 lg:gap-24">
  <div class="lg:w-1/2">
    <h2 class="font-bold text-3xl pb-4">{intro.title}</h2>
    {#each intro.subtitle as subtitle}
      <h3 class="font-serif italic">{subtitle}</h3>
    {/each}
    {#each intro.description as description}
      <p class="font-serif pt-4 text-pretty max-w-prose">{@html description}</p>
    {/each}
  </div>
  <div class="lg:w-1/2">
    <img src={intro.image} alt="Intro" />
  </div>
</div>
