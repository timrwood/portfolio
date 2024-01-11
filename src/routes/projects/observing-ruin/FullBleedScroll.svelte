<script lang="ts">
  export let image: string;
</script>

<div
  class="
    m-[-2px_-50vw_0] w-[100vw] relative left-1/2 right-1/2 h-[70vh]
    border-y-2 border-black
    bg-white
    bg-repeat-x bg-center bg-fixed bg-cover
  "
  style="background-image:url({image})"
></div>
