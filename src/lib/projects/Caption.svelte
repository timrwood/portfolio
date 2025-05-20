<script lang="ts">
  import type { Snippet } from 'svelte';
  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="text-l max-w-prose font-serif text-pretty italic">
  {@render children()}
</div>
