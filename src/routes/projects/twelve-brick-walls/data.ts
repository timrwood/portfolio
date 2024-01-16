import type { Project, Intro } from '$lib/types';

import coverImage from './images/cover.jpg';
import introImage from './images/intro.jpg';

export const project: Project = {
  slug: 'twelve-brick-walls',
  title: 'Twelve Brick Walls',
  image: coverImage
};

export const intro: Intro = {
  title: 'Twelve Brick Walls',
  subtitle: ['Advised by Ania Jaworska', 'Spring 2020'],
  description: [
    "The focus of this studio was how the unit of the brick can aggregate into something greater. From a found condition in a windowsill, a sloped 'uncommon' brick form was extracted. This uncommon brick was combined with other common bricks and wood framing to form twelve unique walls with their own strategies.",
    'Following the module of the brick, these walls branch off of a shared core, delaminating into complex spaces. By folding back on each themselves and aligning the ends of two different walls with each other, the walls create the illusion of rooms from several distinct parts. The three disparate elements of wood, common brick, and uncommon brick are arranged into cohesive walls, and the twelve disparate walls are arranged into a cohesive pavilion form.'
  ],
  image: introImage
};
