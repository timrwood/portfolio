<script lang="ts">
  import Img from '$lib/Img.svelte';

  import portfolioTableOfContentsImage from './images/portfolio-table-of-contents.jpg?as=withColor';

  import { topProject, next3Projects, allProjects } from './projects/projects';

  const top8Projects = allProjects.slice(0, 8);
</script>

<svelte:head>
  <title>Tim Wood | Architecture Portfolio</title>
</svelte:head>

<a href="/projects/{topProject.slug}" class="group block px-3 py-8">
  <div
    class="relative bg-cover bg-[top_75%_left_50%]"
    style="background-image:url({topProject.coverImage.src}"
  >
    <div class="aspect-square max-h-[70vh] sm:aspect-[3/2]"></div>
    <div
      class="absolute inset-1 border-4 border-slate-50 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
    ></div>
  </div>
  <div class="flex justify-between gap-2 pt-2">
    <div class="font-bold">{topProject.title}</div>
    <div class="font-serif italic">{topProject.year}</div>
  </div>
  <div class="pb-2">{topProject.subtitle}</div>
</a>

<div class="flex flex-col flex-nowrap gap-12 px-3 pb-8 sm:flex-row">
  {#each next3Projects as project}
    <a href="/projects/{project.slug}" class="group group block basis-1/3">
      <div class="relative aspect-square">
        <Img
          image={project.coverImage}
          alt="{project.title} cover image"
          class="h-full w-full object-cover"
        />
        <div
          class="absolute inset-1 border-4 border-slate-50 opacity-0 transition-opacity duration-250 group-hover:opacity-100 group-hover:duration-0"
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

<div class="mx-24 mb-12 border-b-3 border-slate-200 pt-12"></div>

<div class="mx-auto flex flex-wrap justify-center gap-24 sm:w-2/3 sm:flex-nowrap lg:w-1/2">
  <a
    class="block w-full py-4 text-center font-semibold text-blue-600 hover:opacity-90 sm:w-1/2"
    href="/projects"
  >
    <div class="pb-4">View all projects</div>
    <div class="flex flex-wrap">
      {#each top8Projects as project}
        <div class="w-1/4 p-1">
          <div class="aspect-square" style="background-color:{project.coverImage.color}"></div>
          <div class="flex justify-stretch pt-1">
            <div
              class="grow border-t-4 border-slate-500"
              style="flex-basis:{project.title.length}%"
            ></div>
            <div class="grow basis-1/4"></div>
            <div class="grow-0 basis-3 border-t-4 border-slate-500"></div>
          </div>
          <div class="flex justify-stretch">
            <div
              class="mt-1 grow border-t-2 border-slate-500"
              style="flex-basis:{project.subtitle.length}%"
            ></div>
            <div class="grow basis-1/3"></div>
          </div>
        </div>
      {/each}
    </div>
  </a>
  <a
    class="block w-full py-4 text-center font-semibold text-blue-600 hover:opacity-90 sm:w-1/2"
    href="/portfolio"
  >
    <div class="pb-4 text-center font-semibold text-blue-600">
      <svg
        class="inline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          d="m14 2 6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h8Zm4 18V9h-5V4H6v16h12Zm-2-5-4 4-4-4 1.4-1.4 1.6 1.6V11h2v4.2l1.6-1.6L16 15Z"
          fill="currentColor"
        />
      </svg> Download as PDF
    </div>
    <div class="bg-slate-200 p-2">
      <Img image={portfolioTableOfContentsImage} alt="Portfolio PDF table of contents" />
    </div>
  </a>
</div>
