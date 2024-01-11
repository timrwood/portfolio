import type { Project, Intro } from '$lib/types';

import coverImage from './images/cover.jpg';
import introImage from './images/intro.jpg';

export const project: Project = {
  slug: 'observing-ruin',
  title: 'Observing Ruin',
  image: coverImage
};

export const intro: Intro = {
  title: 'Observing Ruin',
  subtitle: ['Advised by Dan Wheeler', 'Fall 2021'],
  description: [
    'Overlooked by most, the south wall of the Manhattan Building is largely covered by a battered brick wall, the last remaining remnant of a building demolished to make way for Congress Parkway in 1949. This project carefully positions a chiseled, prismatic opaque glass volume set in contrast to the historic context, the ground plane, the rough broken brick and the chaos of the surrounding intersection. Upon entry, guests turn off their devices, meander to and sit in a silent felt-lined room, looking onto this place, contemplating ruin.'
  ],
  image: introImage
};
