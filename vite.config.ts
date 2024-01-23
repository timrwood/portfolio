import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { imagetools, pictureFormat } from 'vite-imagetools';

function run(cfg) {
  console.log({ cfg });
  return async function (metadatas) {
    console.log({ metadatas });
    const pic = pictureFormat()(metadatas);
    const lqip = (cfg && parseInt(cfg)) ?? 16;
    if (lqip) {
      const { image } = metadatas.find((i) => i.src === pic.img.src);
      if (lqip > 1) {
        const buf = await image
          .clone()
          .resize({ width: lqip })
          .toFormat('webp', { quality: 20 })
          .toBuffer();
        pic.img.lqip = buf.toString('base64');
      } else {
        const { dominant } = await image.stats();
        const { r, g, b } = dominant;
        pic.img.lqip = '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
      }
    }
    return pic;
  };
}

export default defineConfig({
  plugins: [
    sveltekit(),
    imagetools({
      defaultDirectives(url) {
        if (url.searchParams.has('intro')) {
          return new URLSearchParams({
            // tint: 'ffaa22',
            as: 'lqip'
          });
        }
        return new URLSearchParams();
      },
      extendOutputFormats(builtins) {
        console.log({ ...builtins, lqip: run });
        return { ...builtins, lqip: run };
      }
    })
  ]
});
