<script lang="ts">
  import ProjectNav from './ProjectNav.svelte';

  export let data;
</script>

<ProjectNav />

<div class="flex flex-wrap">
  {#each data.projects as project}
    <a href="/work/{project.slug}" class="p-3 w-1/4 aspect-portrait relative group">
      <img
        src={project.image}
        alt="Full Bleed"
        class="w-full h-full object-cover rounded-lg group-hover:opacity-70"
      />
      <h2
        class="absolute bottom-3 inset-x-3 bg-gradient-to-t from-slate-300/80 from-30% pb-2 pt-8 rounded-lg"
      >
        <div class="uppercase font-bold text-slate-800 text-center">{project.title}</div>
      </h2>
    </a>
  {/each}
</div>
