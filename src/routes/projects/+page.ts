import type { Project } from '$lib/types';

import { project as putAwayHouse } from './put-away-house/data';
import { project as brickedIn } from './bricked-in/data';
import { project as museAthleticClub } from './muse-athletic-club/data';
import { project as aLongerNow } from './a-longer-now/data';
import { project as observingRuin } from './observing-ruin/data';
import { project as singleParent } from './single-parent/data';
import { project as museumMarket } from './museum-market/data';

export function load(): { projects: Project[] } {
  return {
    projects: [
      putAwayHouse,
      aLongerNow,
      brickedIn,
      museAthleticClub,
      observingRuin,
      singleParent,
      museumMarket
    ]
  };
}
