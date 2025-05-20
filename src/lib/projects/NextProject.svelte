<script lang="ts">
  import Img from '$lib/Img.svelte';
  import projects from '../../routes/projects/projects';

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();

  const projectIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[projectIndex + 1] || projects[0];
</script>

<a href="/projects/{nextProject.slug}" class="flex items-center gap-8 px-3 pt-24 pb-12">
  <div class="flex w-1/3 justify-end md:w-1/2">
    <Img image={nextProject.introImage} alt="Intro" class="md:w-1/2" />
  </div>
  <div class="w-2/3 md:w-1/2">
    <p class="font-serif italic">Next project:</p>
    <p class="text-xl font-bold md:text-3xl">{nextProject.title}</p>
    <h3 class="pb-2 text-xl">{nextProject.subtitle}</h3>

    <h3 class="font-serif italic">{nextProject.year}</h3>
  </div>
</a>
