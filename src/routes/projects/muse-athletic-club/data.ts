import type { Project, Intro } from '$lib/types';

import coverImage from './images/cover.jpg';
import introImage from './images/intro.jpg';

export const project: Project = {
  slug: 'muse-athletic-club',
  title: 'Muse Athletic Club',
  image: coverImage
};

export const intro: Intro = {
  title: 'Muse Athletic Club',
  subtitle: ['Advised by Barbera Materia and Spencer McNeil', 'Spring 2023'],
  description: [
    'After observing a lack of public spaces in American cities, the studio brief called for a re-imagining of the institution and typology of the American Athletic Club.',
    'Athletic activity is given different names based on its intended goal. Athletics for competition is sport, athletics for self improvement is exercise, and athletics for fun is recreation. These goals are complimentary, the athlete improves themself in anticipation of a better performance in competition, and recovers from an intense performance with recreation.',
    'This project pairs athletics with the arts, with the two disciplines acting as inspiration for each other. The artist is given a constant reference of the human form, and the runner is given a live soundtrack of practicing musicians. The inhabitants from both disciplines simultaneously act as both performer and audience.'
  ],
  image: introImage
};
