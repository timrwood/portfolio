<script lang="ts">
  let classNames: string | null = null;
  export { classNames as class };
  export let image: ImageWithLqip;
  export let alt: string;

  let style = `background:url(data:image/webp;base64,${image.lqip}) no-repeat center/cover`;
</script>

<img width={image.width} height={image.height} {alt} class={classNames} {style} />
