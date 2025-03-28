<script lang="ts">
  interface Props {
    id: string;
  }

  let { id }: Props = $props();
</script>

<div class="relative right-1/2 left-1/2 m-[0_-50vw] w-[100vw] bg-slate-900 py-24">
  <div class="mx-auto xl:container">
    <div class="relative aspect-video">
      <iframe
        class="absolute inset-0 h-full w-full"
        src="https://www.youtube.com/embed/{id}?vq=hd1080&rel=0&color=white"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      {id}
    </div>
  </div>
</div>
