import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

function withColor() {
  return async function (metadatas: any) {
    const { format, width, height, hasAlpha, src, image } = metadatas[0];

    const { dominant } = await image.stats();
    const r = Math.min(240, dominant.r);
    const g = Math.min(230, dominant.g);
    const b = Math.min(230, dominant.b);

    return {
      width,
      height,
      src,
      format,
      hasAlpha,
      color: '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)
    } as ImageWithColor;
  };
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    imagetools({
      cache: {
        enabled: false
      },
      extendOutputFormats(builtins) {
        return { ...builtins, withColor };
      }
    })
  ]
});
