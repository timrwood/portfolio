<script lang="ts">
  export let id: string;
</script>

<div class="m-[0_-50vw] w-[100vw] relative left-1/2 right-1/2 bg-slate-900 py-24">
  <div class="container mx-auto">
    <div class="aspect-video relative">
      <iframe
        class="absolute inset-0 w-full h-full"
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
