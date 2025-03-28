<script lang="ts">
  interface Props {
    children: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="max-w-prose space-y-4 font-serif text-pretty">
  {@render children()}
</div>
