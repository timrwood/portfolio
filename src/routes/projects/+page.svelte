<script lang="ts">
  import Img from '$lib/Img.svelte';

  import { allProjects } from './projects';
</script>

<svelte:head>
  <title>Tim Wood | Projects</title>
</svelte:head>

<h2 class="py-8 text-center text-3xl font-bold tracking-widest uppercase">All Projects</h2>

<div class="flex flex-wrap">
  {#each allProjects as project}
    <a href="/projects/{project.slug}" class="group w-1/2 p-3 sm:w-1/3 lg:w-1/4">
      <div class="relative aspect-square">
        <Img
          image={project.coverImage}
          alt="{project.title} cover image"
          class="h-full w-full object-cover"
        />
        <div
          class="absolute inset-1 border-4 border-slate-50 opacity-0 transition-opacity duration-350 ease-out group-hover:opacity-100 group-hover:duration-50"
        ></div>
      </div>

      <div class="flex justify-between gap-2 pt-2">
        <div class="font-bold">{project.title}</div>
        <div class="font-serif italic">{project.year}</div>
      </div>
      <div class="pb-2">{project.subtitle}</div>
    </a>
  {/each}
</div>
