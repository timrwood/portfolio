<script lang="ts">
  import projects from './projects';
</script>

<svelte:head>
  <title>Tim Wood | Projects</title>
</svelte:head>

<h2 class="font-bold text-3xl py-8 text-center tracking-widest uppercase">Projects</h2>

<div class="flex flex-wrap">
  {#each projects as project}
    <a
      href="/projects/{project.slug}"
      class="p-3 w-1/2 sm:w-1/3 lg:w-1/4 aspect-portrait relative group"
    >
      <img
        src={project.coverImage}
        alt="Full Bleed"
        class="w-full h-full object-cover rounded-lg group-hover:opacity-70"
      />
      <h2
        class="absolute bottom-3 inset-x-3 flex justify-center items-center h-14 px-2 rounded-b-lg backdrop-blur-sm bg-white/50"
      >
        <div class="uppercase font-bold text-slate-800 text-center leading-5">{project.title}</div>
      </h2>
    </a>
  {/each}
</div>
