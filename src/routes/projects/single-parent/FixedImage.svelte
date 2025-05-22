<script lang="ts">
  interface Props {
    image: ImageWithColor;
  }

  let { image }: Props = $props();
</script>

<div
  class="px-1/4 -mb-0.5 h-[60vh] border-y-2 bg-[length:auto_70%] bg-fixed bg-center bg-no-repeat"
  style="background-image:url({image.src})"
></div>
