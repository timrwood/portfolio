import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

function lqip() {
  return async function (metadatas: any) {
    const { format, width, height, hasAlpha, src, image } = metadatas[0];

    const buffer = await image
      .clone()
      .resize({ width: 16 })
      .toFormat('webp', { quality: 20 })
      .toBuffer();

    return {
      width,
      height,
      src,
      format,
      hasAlpha,
      lqip: buffer.toString('base64')
    } as ImageWithLqip;
  };
}

export default defineConfig({
  plugins: [
    sveltekit(),
    imagetools({
      extendOutputFormats(builtins) {
        return { ...builtins, lqip };
      }
    })
  ]
});
