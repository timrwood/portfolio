<script lang="ts">
  export let image: ImageWithLqip;
  export let alt: string;

  let style = image.hasAlpha
    ? ''
    : `background:url(data:image/webp;base64,${image.lqip}) no-repeat center/cover`;
</script>

<img src={image.src} width={image.width} height={image.height} {alt} {style} {...$$restProps} />
