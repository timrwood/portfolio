<script>
  import '../app.css';
</script>

<div class="fixed inset-x-0 z-10 bg-slate-50/80 backdrop-blur-sm">
  <nav class="container mx-auto flex justify-between uppercase leading-8 hover:text-slate-900">
    <a href="/" class="text-xl p-3 tracking-widest">Tim Wood</a>
    <div class="shrink flex text-l text-slate-700">
      <a href="/projects" class="p-3">Projects</a>
      <a href="/projects" class="p-3">About</a>
    </div>
  </nav>
</div>

<div class="container mx-auto pt-12">
  <slot />
</div>
