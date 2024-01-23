<script>
  import gridImage from './images/grid.jpg';
  import gridInnerImage from './images/grid-inner.jpg';
</script>

<svelte:head>
  <title>Tim Wood | Architecture Portfolio</title>
</svelte:head>

<div
  class="fixed inset-0 bg-center bg-[length:100%_auto] sm:bg-[length:600px_auto] flex items-center justify-center"
  style="background-image:url({gridImage})"
>
  <div
    class="
      w-full sm:w-[600px] aspect-[2/1]
      flex items-center justify-center flex-col
      sm:mb-[150px]
      bg-white bg-center bg-[length:100%_auto] sm:bg-[length:600px_auto]
    "
    style="background-image:url({gridInnerImage})"
  >
    <h1 class="text-xl sm:text-3xl tracking-widest uppercase font-bold">Tim Wood</h1>
    <h2 class="text-md sm:text-2xl tracking-widest font-serif italic pt-2">
      Architecture Portfolio
    </h2>
    <a class="text-sm sm:text-xl tracking-widest pt-8 underline" href="/projects">view projects</a>
  </div>
</div>
