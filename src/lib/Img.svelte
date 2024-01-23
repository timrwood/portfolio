<script lang="ts">
  export let image: ImageWithColor;
  export let alt: string;

  let style = image.hasAlpha ? '' : `background-color:${image.color}`;
</script>

<img src={image.src} width={image.width} height={image.height} {alt} {style} {...$$restProps} />
