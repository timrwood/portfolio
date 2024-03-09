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
    <a class="text-sm sm:text-xl tracking-widest pt-8 underline" href="/projects"
      >View projects online</a
    >
    <a class="text-sm sm:text-xl tracking-widest pt-4" href="/portfolio">
      <svg
        class="inline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          d="m14 2 6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h8Zm4 18V9h-5V4H6v16h12Zm-2-5-4 4-4-4 1.4-1.4 1.6 1.6V11h2v4.2l1.6-1.6L16 15Z"
        />
      </svg>
      <span class="underline">Download portfolio as PDF</span>
    </a>
  </div>
</div>
