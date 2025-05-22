import putAwayHouse from './put-away-house/project';
import brickedIn from './bricked-in/project';
import museAthleticClub from './muse-athletic-club/project';
import aLongerNow from './a-longer-now/project';
import observingRuin from './observing-ruin/project';
import singleParent from './single-parent/project';
import museumMarket from './museum-market/project';
import theMonasticPath from './the-monastic-path/project';
import chicagoFrame from './chicago-frame/project';
import twelveBrickWalls from './twelve-brick-walls/project';
import polarAndCartesian from './polar-and-cartesian/project';
import verticalAndHorizontal from './vertical-and-horizontal/project';
import tinyHouses from './tiny-houses/project';
import playFrame from './play-frame/project';
import foodSpaceFrame from './food-space-frame/project';

const UNSTARTED = [
  museumMarket,
  theMonasticPath,
  chicagoFrame,
  polarAndCartesian,
  verticalAndHorizontal,
  tinyHouses,
  foodSpaceFrame
];

const STARTED = [];

export const allProjects = [
  observingRuin,
  putAwayHouse,
  museAthleticClub,
  playFrame,
  brickedIn,
  aLongerNow,
  singleParent,
  twelveBrickWalls
] as Project[];

export const topProject = observingRuin;
export const next3Projects = [putAwayHouse, museAthleticClub, playFrame];
