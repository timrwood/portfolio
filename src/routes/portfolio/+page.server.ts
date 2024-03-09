import { redirect } from '@sveltejs/kit';

export function load() {
  redirect(
    307,
    'https://github.com/timrwood/portfolio/releases/download/2024-03-09/Tim.Wood.Portfolio.pdf'
  );
}
