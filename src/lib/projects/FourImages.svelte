<script lang="ts">
  export let src1: string;
  export let src2: string;
  export let src3: string;
  export let src4: string;

  export let alt1: string;
  export let alt2: string;
  export let alt3: string;
  export let alt4: string;
</script>

<div class="grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-16 place-items-center">
  <img src={src1} alt={alt1} />
  <img src={src2} alt={alt2} />
  <img src={src3} alt={alt3} />
  <img src={src4} alt={alt4} />
</div>
