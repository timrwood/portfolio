<script lang="ts">
  import Img from '$lib/Img.svelte';

  import projects from './projects';
</script>

<svelte:head>
  <title>Tim Wood | Projects</title>
</svelte:head>

<h2 class="py-8 text-center text-3xl font-bold tracking-widest uppercase">Projects</h2>

<div class="flex flex-wrap">
  {#each projects as project}
    <a
      href="/projects/{project.slug}"
      class="group relative aspect-[2/3] w-1/2 p-3 sm:w-1/3 lg:w-1/4"
    >
      <Img
        image={project.coverImage}
        alt="{project.title} cover image"
        class="h-full w-full rounded-lg object-cover group-hover:opacity-70"
      />
      <h2
        class="absolute inset-x-3 bottom-3 flex h-14 items-center justify-center rounded-b-lg bg-white/50 px-2 backdrop-blur-sm"
      >
        <div class="text-center leading-5 font-bold text-slate-800 uppercase">{project.title}</div>
      </h2>
    </a>
  {/each}
</div>
