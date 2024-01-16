<script lang="ts">
  export let data;
</script>

<div class="flex flex-wrap">
  {#each data.projects as project}
    <a href="/projects/{project.slug}" class="p-3 w-1/4 aspect-portrait relative group">
      <img
        src={project.image}
        alt="Full Bleed"
        class="w-full h-full object-cover rounded-lg group-hover:opacity-70"
      />
      <h2 class="absolute bottom-3 inset-x-3 py-2 rounded-b-lg backdrop-blur-sm bg-white/40">
        <div class="uppercase font-bold text-slate-800 text-center">{project.title}</div>
      </h2>
    </a>
  {/each}
</div>
