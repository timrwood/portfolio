<script lang="ts">
  let classNames: string | null = null;
  export { classNames as class };
  export let image: ImageWithLqip;
  export let alt: string;

  let style = image.hasAlpha
    ? ''
    : `background:url(data:image/webp;base64,${image.lqip}) no-repeat center/cover`;
</script>

<img src={image.src} width={image.width} height={image.height} {alt} class={classNames} {style} />
