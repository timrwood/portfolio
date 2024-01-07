import type { Project, Intro } from '$lib/types';

import coverImage from './images/cover.jpg';
import introImage from './images/intro.jpg';

export const project: Project = {
  slug: 'a-longer-now',
  title: 'A Longer Now',
  image: coverImage
};

export const intro: Intro = {
  title: 'A Longer Now',
  subtitle: ['Advised by Cédric Van Parys', 'Fall 2023'],
  description: [
    'This studio brief called for a re-imagining of monuments, not as symbols for asserting power and control, but as vessels for communicating the identity of a place, group, or individual. These new monuments mark places for ritual, ceremony, and gathering, linking humanity to the built environment, the natural world, and the cosmos.',
    "The project is inspired by a personal interest in a passage from Juhani Pallasmaa's book, <i>Eyes of the Skin</i>. Within an analysis of the weathering of natural materials and their ability to connect humans to processes beyond the scale of the human lifetime, Pallasmaa writes, “Architecture domesticates limitless space and enables us to inhabit it, but it should likewise domesticate endless time and enable us to inhabit the continuum of time.”",
    'This is a monument for a new perspective of the human inhabitation of the continuum of time.'
  ],
  image: introImage
};
