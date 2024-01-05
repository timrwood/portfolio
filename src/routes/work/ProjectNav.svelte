<script lang="ts">
  import type { Project } from '$lib/types';

  export let project: Project | null = null;
</script>

<h1 class="text-4xl px-3 py-8">
  <a href="/work" class="font-serif italic underline">Projects</a>

  {#if project}
    <span class="font-bold">{project.title}</span>
  {/if}
</h1>
