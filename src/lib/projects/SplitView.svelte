<script lang="ts">
  export let align: 'top' | 'bottom' = 'top';
  export let spacing: '1|1' | '1|2' | '2|1' = '1|1';

  const leftSpacingMap = {
    '1|1': 'w-1/2',
    '1|2': 'w-1/3',
    '2|1': 'w-2/3'
  };

  const rightSpacingMap = {
    '1|1': 'w-1/2',
    '1|2': 'w-2/3',
    '2|1': 'w-1/3'
  };

  const alignMap = {
    top: 'items-start',
    bottom: 'items-end'
  };
</script>

<div class="px-3 py-24">
  <div class="flex gap-16 {alignMap[align]}">
    <div class={leftSpacingMap[spacing]}>
      <slot name="left" />
    </div>
    <div class={rightSpacingMap[spacing]}>
      <slot name="right" />
    </div>
  </div>
</div>
