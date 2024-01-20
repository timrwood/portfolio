<script lang="ts">
  export let image: string;
</script>

<div
  class="
    m-[0_-50vw] w-[100vw] relative left-1/2 right-1/2 h-[70vh]
    border-b-2 border-[#35523A]
    bg-repeat-x bg-center bg-fixed
    bg-[length:130%] lg:bg-[length:110%] min-[2000px]:bg-[length:2500px]
  "
  style="background-image:url({image})"
></div>
