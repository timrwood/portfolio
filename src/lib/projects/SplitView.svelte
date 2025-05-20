<script lang="ts">
  interface Props {
    align?: 'top' | 'center' | 'bottom';
    spacing?: '1|1' | '1|2' | '2|1';
    left: import('svelte').Snippet;
    right: import('svelte').Snippet;
  }

  let { align = 'top', spacing = '1|1', left, right }: Props = $props();

  const leftSpacingMap = {
    '1|1': 'lg:w-1/2',
    '1|2': 'lg:w-1/3',
    '2|1': 'lg:w-2/3'
  };

  const rightSpacingMap = {
    '1|1': 'lg:w-1/2',
    '1|2': 'lg:w-2/3',
    '2|1': 'lg:w-1/3'
  };

  const alignMap = {
    top: 'lg:items-start',
    center: 'lg:items-center',
    bottom: 'lg:items-end'
  };
</script>

<div class="my-12 my-18 px-3 lg:my-24">
  <div class="flex flex-col gap-12 lg:flex-row lg:gap-24 {alignMap[align]}">
    <div class="space-y-8 {leftSpacingMap[spacing]}">
      {@render left()}
    </div>
    <div class="space-y-8 {rightSpacingMap[spacing]}">
      {@render right()}
    </div>
  </div>
</div>
