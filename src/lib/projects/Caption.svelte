<script lang="ts">
  interface Props {
    children: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="text-l max-w-prose font-serif text-pretty italic">
  {@render children()}
</div>
