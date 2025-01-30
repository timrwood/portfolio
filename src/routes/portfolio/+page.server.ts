import { redirect } from '@sveltejs/kit';

export function load() {
  redirect(
    307,
    'https://github.com/timrwood/portfolio/releases/download/2025-01-29/Tim-Wood-Portfolio-2025.pdf'
  );
}
