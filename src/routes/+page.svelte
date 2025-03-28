<script>
  import gridImage from './images/grid.jpg';
  import gridInnerImage from './images/grid-inner.jpg';
</script>

<svelte:head>
  <title>Tim Wood | Architecture Portfolio</title>
</svelte:head>

<div
  class="fixed inset-0 flex items-center justify-center bg-[length:100%_auto] bg-center sm:bg-[length:600px_auto]"
  style="background-image:url({gridImage})"
>
  <div
    class="
      flex aspect-[2/1] w-full
      flex-col items-center justify-center bg-white
      bg-[length:100%_auto]
      bg-center sm:mb-[150px] sm:w-[600px] sm:bg-[length:600px_auto]
    "
    style="background-image:url({gridInnerImage})"
  >
    <h1 class="text-xl font-bold tracking-widest uppercase sm:text-3xl">Tim Wood</h1>
    <h2 class="text-md pt-2 pb-6 font-serif tracking-widest italic sm:text-2xl">
      Architecture Portfolio
    </h2>
    <a class="block p-1 text-sm underline sm:p-2 sm:text-xl" href="/projects"> View online </a>
    <a class="block p-1 text-sm sm:p-2 sm:text-xl" href="/portfolio">
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
      <span class="underline">Download as PDF</span>
    </a>
  </div>
</div>
