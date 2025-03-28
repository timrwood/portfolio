<script lang="ts">
  interface Props {
    image: ImageWithColor;
  }

  let { image }: Props = $props();
</script>

<div
  class="
    relative right-1/2 left-1/2 m-[-2px_-50vw_0] h-[70vh] w-[100vw]
    border-y-2 border-black
    bg-white
    bg-cover bg-fixed bg-center bg-repeat-x
  "
  style="background-image:url({image.src})"
></div>
