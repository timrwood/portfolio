<script>
  import '../app.css';
</script>

<div class="bg-white shadow-2xl shadow-[rgba(0,0,0,0.1)] hover:text-slate-900 fixed inset-x-0 z-10">
  <nav class="container mx-auto flex justify-between">
    <a href="/" class="text-xl font-bold leading-8 p-3">Tim Wood</a>
    <div class="shrink flex">
      <a
        href="/projects"
        class="text-l font-bold leading-8 p-3 uppercase text-slate-700 hover:text-slate-900"
      >
        Projects
      </a>
      <a
        href="/projects"
        class="text-l font-bold leading-8 p-3 uppercase text-slate-700 hover:text-slate-900"
      >
        About
      </a>
    </div>
  </nav>
</div>

<div class="container mx-auto pt-12">
  <slot />
</div>
