<script>
  import '../app.css';
</script>

<div class="fixed inset-x-0 z-50 bg-slate-50/80 backdrop-blur-sm">
  <nav
    class="xl:container mx-auto flex justify-between px-3 uppercase leading-8 hover:text-slate-900"
  >
    <a href="/" class="text-xl p-3 tracking-widest">Tim Wood</a>
    <div class="shrink flex text-l text-slate-700">
      <a href="/projects" class="p-3">Projects</a>
      <a href="/about" class="p-3">About</a>
    </div>
  </nav>
</div>

<div class="xl:container mx-auto py-16 px-3">
  <slot />
</div>
