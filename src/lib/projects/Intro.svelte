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
    <h2 class="pb-4 text-3xl font-bold">{project.title}</h2>
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
      <p class="max-w-prose font-serif text-pretty">{@html description}</p>
    {/each}
  </div>
</div>
