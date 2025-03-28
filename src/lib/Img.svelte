<script lang="ts">
  interface Props {
    image: ImageWithColor;
    alt: string;
    [key: string]: any;
  }

  let { image, alt, ...rest }: Props = $props();

  let style = image.hasAlpha ? '' : `background-color:${image.color}`;
</script>

<img src={image.src} width={image.width} height={image.height} {alt} {style} {...rest} />
