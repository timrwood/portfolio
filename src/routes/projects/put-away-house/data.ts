import type { Project, Intro } from '$lib/types';

import coverImage from './images/cover.jpg';
import introImage from './images/intro.jpg';

export const project: Project = {
  slug: 'put-away-house',
  title: 'Put Away House',
  image: coverImage
};

export const intro: Intro = {
  title: 'Put Away House',
  subtitle: ['Advised by Penelope Dean and Grant Gibson', 'Fall 2022'],
  description: [
    'In response to a brief to re-imagine the Chicago three-flat typology as a micro-collective, this project conceptualizes collectivity through the sharing of objects, not the sharing of space. Clothing, beds, mementos and other personal objects are unshared, but tools, board games, bread makers and other utilitarian objects are shared among the collective.',
    'Twelve living spaces are surrounded by built-in shelving on three walls and glass on the fourth wall, establishing a formal strategy for where objects are placed at rest. The shelving hold all items which can be stored away when not in use, freeing the living spaces between the shelves to exhibit the objects that are never stored away: couches, lamps, beds, and bathtubs. The rigid shelving grid provides a backdrop for one to put their habits, their interests, and their lives into.',
    'A place to put away themselves.'
  ],
  image: introImage
};
