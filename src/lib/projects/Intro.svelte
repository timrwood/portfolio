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

<div class="flex flex-col lg:flex-row items-center py-12 lg:py-24 px-3 gap-12 lg:gap-24">
  <div class="lg:w-1/2">
    <h2 class="font-bold text-3xl pb-4">{project.title}</h2>
    {#each project.subtitle as subtitle}
      <h3 class="font-serif italic">{subtitle}</h3>
    {/each}
    {#each project.description as description}
      <p class="font-serif pt-4 text-pretty max-w-prose">{@html description}</p>
    {/each}
  </div>
  <div class="lg:w-1/2">
    <Img image={project.introImage} alt="{project.title} Intro" fetchpriority="high" />
  </div>
</div>
