<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<div class="fixed inset-x-0 z-50 bg-slate-50/80 backdrop-blur-sm">
  <nav
    class="mx-auto flex justify-between px-3 leading-8 uppercase hover:text-slate-900 xl:container"
  >
    <a href="/" class="p-3 text-xl tracking-widest">
      <span class="font-semibold">Tim Wood</span>
      Portfolio
    </a>
    <div class="text-l flex shrink text-slate-700">
      <a href="/projects" class="p-3">Projects</a>
      <a href="/about" class="p-3">About</a>
    </div>
  </nav>
</div>

<div class="mx-auto px-3 py-14 xl:container">
  {@render children()}
</div>
