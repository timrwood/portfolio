<script lang="ts">
  import Img from '$lib/Img.svelte';

  export let project: Project;
</script>

<svelte:head>
  <title>Tim Wood | {project.title}</title>
  <meta property="og:title" content={project.title} />
  <meta property="og:image" content={project.introImage.src} />
  <meta property="og:site_name" content="Tim Wood" />
  <meta name="description" content={project.description.join('\n')} />
</svelte:head>

<div
  class="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-12 lg:gap-x-24 py-12 lg:py-24 px-3 grid-rows-[auto_minmax(0,1fr)]"
>
  <div>
    <h2 class="font-bold text-3xl pb-4">{project.title}</h2>
    {#each project.subtitle as subtitle}
      <h3 class="font-serif italic">{subtitle}</h3>
    {/each}
  </div>
  <Img
    image={project.introImage}
    alt="{project.title} Intro"
    fetchpriority="high"
    class="row-span-2 self-center"
  />
  <div class="space-y-4">
    {#each project.description as description}
      <p class="font-serif text-pretty max-w-prose">{@html description}</p>
    {/each}
  </div>
</div>
