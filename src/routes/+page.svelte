<script lang="ts">
  import { onMount } from 'svelte';
  let canvasElement: HTMLCanvasElement;

  const SPACE_X = 150;
  const SPACE_Y = 50;

  const colors = ['#aaa', '#bbb', '#ccc', '#ddd'];

  function px(i: number, j: number): number {
    return (i + (j % 2) / 2) * SPACE_X;
  }
  function py(i: number, j: number): number {
    return j * SPACE_Y;
  }

  function render(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#ccc';

    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        ctx.beginPath();
        // ctx.moveTo(px(i, j), py(i, j));
        // ctx.lineTo(px(i, j), py(i, j) + 40);
        // // ctx.stroke();
        // ctx.moveTo(px(i, j), py(i, j));
        // ctx.lineTo(px(i, j + 1), py(i, j + 1));
        // // ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];

        // ctx.stroke();
        // ctx.moveTo(px(i, j), py(i, j));
        // // ctx.lineTo(px(i - 1, j + 1), py(i, j + 1));
        // ctx.lineTo(px(i - 1 + (j % 2) * 2, j + 1), py(i, j + 1));
        // // ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
        // ctx.stroke();

        ctx.moveTo(px(i, j) - 9, py(i, j) - 6);
        ctx.lineTo(px(i, j) + 9, py(i, j) + 6);
        ctx.moveTo(px(i, j) - 9, py(i, j) + 6);
        ctx.lineTo(px(i, j) + 9, py(i, j) - 6);
        ctx.stroke();
      }
    }
  }

  onMount(() => {
    canvasElement.width = window.innerWidth * 2;
    canvasElement.height = window.innerHeight * 2;
    const ctx = canvasElement.getContext('2d');
    if (ctx) render(ctx);
  });
</script>

<canvas bind:this={canvasElement} class="fixed inset-0 w-full h-full" />
