<script lang="ts">
  import type { Snippet } from 'svelte';
  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="my-12 my-18 px-3 lg:my-24">
  {@render children()}
</div>
