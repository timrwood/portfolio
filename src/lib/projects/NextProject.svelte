<script lang="ts">
  import type { Project } from '$lib/types';

  export let project: Project;

  import projects from '../../routes/projects/projects';

  const projectIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[projectIndex + 1] || projects[0];
</script>

<a href="/projects/{nextProject.slug}" class="flex gap-8 items-center px-3 pt-24 pb-12">
  <div class="w-1/3 md:w-1/2 flex justify-end">
    <img src={nextProject.introImage} alt="Intro" class="md:w-1/2" />
  </div>
  <div class="w-2/3 md:w-1/2">
    <p class="font-serif italic">Next project:</p>
    <p class="font-bold text-xl md:text-3xl pb-4">{nextProject.title}</p>
    {#each nextProject.subtitle as subtitle}
      <h3 class="font-serif italic">{subtitle}</h3>
    {/each}
  </div>
</a>
