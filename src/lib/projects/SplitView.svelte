<script lang="ts">
  export let align: 'top' | 'center' | 'bottom' = 'top';
  export let spacing: '1|1' | '1|2' | '2|1' = '1|1';

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

<div class="px-3 my-12 my-18 lg:my-24">
  <div class="flex flex-col lg:flex-row gap-12 lg:gap-24 {alignMap[align]}">
    <div class={leftSpacingMap[spacing]}>
      <slot name="left" />
    </div>
    <div class={rightSpacingMap[spacing]}>
      <slot name="right" />
    </div>
  </div>
</div>
