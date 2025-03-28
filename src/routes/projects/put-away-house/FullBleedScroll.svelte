<script lang="ts">
  interface Props {
    image: ImageWithColor;
  }

  let { image }: Props = $props();
</script>

<div
  class="
    relative right-1/2 left-1/2 m-[0_-50vw] h-[70vh] w-[100vw]
    border-b-2 border-[#35523A]
    bg-[length:130%_auto] bg-fixed bg-center
    bg-repeat-x min-[2000px]:bg-[length:2500px_auto] lg:bg-[length:110%_auto]
  "
  style="background-image:url({image.src})"
></div>
