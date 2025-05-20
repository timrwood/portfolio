<script lang="ts">
  import Img from '$lib/Img.svelte';

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();
</script>

<svelte:head>
  <title>Tim Wood | {project.title}</title>
  <meta property="og:title" content={project.title} />
  <meta property="og:image" content={project.introImage.src} />
  <meta property="og:site_name" content="Tim Wood" />
  <meta name="description" content={project.description.join('\n')} />
</svelte:head>

<div
  class="grid grid-cols-1 grid-rows-[auto_minmax(0,1fr)] gap-x-12 gap-y-4 px-3 py-12 lg:grid-cols-2 lg:gap-x-24 lg:py-24"
>
  <div>
    <h2 class="text-3xl font-bold">{project.title}</h2>
    <h3 class="text-xl">{project.subtitle}</h3>
  </div>
  <Img
    image={project.introImage}
    alt="{project.title} Intro"
    fetchpriority="high"
    class="row-span-2 self-center"
  />
  <div class="space-y-4">
    <h3 class="font-serif italic">
      {project.advisors}
      <br />
      {project.year}
    </h3>

    {#each project.description as description}
      <p class="max-w-prose font-serif text-pretty">{@html description}</p>
    {/each}
  </div>
</div>
