<script lang="ts">
  import Img from '$lib/Img.svelte';
  import gridImage from './images/grid.jpg';
  import gridInnerImage from './images/grid-inner.jpg';
  import projects from './projects/projects';

  const firstProject = projects.at(0) as Project;
  const otherProjects = projects.slice(1);
</script>

<svelte:head>
  <title>Tim Wood | Architecture Portfolio</title>
</svelte:head>

<a href="/projects/{firstProject.slug}" class="group block px-3 pb-3">
  <div
    class="h-[80vh] bg-cover bg-center"
    style="background-image:url({firstProject.introImage.src}"
  ></div>
  <div class="flex justify-between py-2">
    <div class="d">
      <strong>{firstProject.title}</strong>
      <em>2022</em>
    </div>
    <div>A Room</div>
  </div>
</a>

<div class="flex flex-wrap">
  {#each otherProjects as project}
    <a href="/projects/{project.slug}" class="group block p-3 sm:w-1/3">
      <div class="aspect-square">
        <Img
          image={project.coverImage}
          alt="{project.title} cover image"
          class="h-full w-full object-cover group-hover:opacity-70"
        />
      </div>

      <h2 class="py-2 font-bold text-slate-800">{project.title}</h2>

      {#each project.subtitle as subtitle}
        <h3 class="font-serif text-sm italic">
          {subtitle}
        </h3>
      {/each}
    </a>
  {/each}
</div>

<!-- <div
  class="fixed inset-0 flex items-center justify-center bg-[length:100%_auto] bg-center sm:bg-[length:600px_auto]"
  style="background-image:url({gridImage})"
>
  <div
    class="
      flex aspect-[2/1] w-full
      flex-col items-center justify-center bg-white
      bg-[length:100%_auto]
      bg-center sm:mb-[150px] sm:w-[600px] sm:bg-[length:600px_auto]
    "
    style="background-image:url({gridInnerImage})"
  >
    <h1 class="text-xl font-bold tracking-widest uppercase sm:text-3xl">Tim Wood</h1>
    <h2 class="text-md pt-2 pb-6 font-serif tracking-widest italic sm:text-2xl">
      Architecture Portfolio
    </h2>
    <a class="block p-1 text-sm underline sm:p-2 sm:text-xl" href="/projects"> View online </a>
    <a class="block p-1 text-sm sm:p-2 sm:text-xl" href="/portfolio">
      <svg
        class="inline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          d="m14 2 6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h8Zm4 18V9h-5V4H6v16h12Zm-2-5-4 4-4-4 1.4-1.4 1.6 1.6V11h2v4.2l1.6-1.6L16 15Z"
        />
      </svg>
      <span class="underline">Download as PDF</span>
    </a>
  </div>
</div> -->
