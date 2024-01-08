<script lang="ts">
  import { Caption, FullBleed, Image, Intro, SplitView } from '$lib/projects/index';

  import diagramDayUseImage from './images/diagram-day-use.png';
  import diagramProgramImage from './images/diagram-program.png';
  import diagramViewsArtImage from './images/diagram-views-art.png';
  import diagramViewsShuffleImage from './images/diagram-views-shuffle.png';
  import diagramViewsTrackImage from './images/diagram-views-track.png';
  import diagramViewsImage from './images/diagram-views.png';
  import fullBleed1Image from './images/full-bleed-1.jpg';
  import fullBleed2Image from './images/full-bleed-2.jpg';
  import perspectiveArtLImage from './images/perspective-art-l.jpg';
  import perspectiveArtRImage from './images/perspective-art-r.jpg';
  import perspectiveGroundLImage from './images/perspective-ground-l.jpg';
  import perspectiveGroundRImage from './images/perspective-ground-r.jpg';
  import perspectiveShuffleLImage from './images/perspective-shuffle-l.jpg';
  import perspectiveShuffleRImage from './images/perspective-shuffle-r.jpg';
  import perspectiveTrackLImage from './images/perspective-track-l.jpg';
  import perspectiveTrackRImage from './images/perspective-track-r.jpg';
  import plansAllImage from './images/plans-all.png';
  import plansArtImage from './images/plans-art.png';
  import plansGroundImage from './images/plans-ground.jpg';
  import plansShuffleImage from './images/plans-shuffle.png';
  import plansTrackImage from './images/plans-track.png';
  import sectionFullBleedImage from './images/section-full-bleed.jpg';
  import sectionTallImage from './images/section-tall.png';
  import sitePlanImage from './images/site-plan.jpg';

  import { intro } from './data';
</script>

<Intro {intro} />

<FullBleed image={fullBleed1Image} />

<SplitView align="top" spacing="2|1">
  <Image
    slot="left"
    src={sitePlanImage}
    alt="A top down map of the mouth of the Chicago river and the surrounding streets and buildings"
  />
  <Caption slot="right">
    In red, the site is located at 250 N Upper Columbus Drive, near the mouth of the Chicago River
  </Caption>
</SplitView>

<SplitView align="center" spacing="1|2">
  <Caption slot="left">
    In blue, a sampling of the typical age of a gym visitor throughout a typical day. In red, a
    sampling of one individual's gym habits across their lifetime.
  </Caption>
  <Image
    slot="right"
    src={diagramDayUseImage}
    alt="A graph showing the time of day that people of different ages visit the gym"
  />
</SplitView>

<SplitView align="center" spacing="2|1">
  <Image
    slot="left"
    src={diagramViewsImage}
    alt="Two people looking at each other from across a break in the floor"
  />
  <Caption slot="right">
    Visual studies on changing field of view when adjacent floor plates are shifted vertically and
    horizontally.
  </Caption>
</SplitView>

<SplitView align="center" spacing="1|2">
  <Caption slot="left">
    Floor plates are split by a large atrium, allowing vertical shifts which create new adjacencies
    between disparate programs.
  </Caption>
  <Image
    slot="right"
    src={diagramProgramImage}
    alt="An exploded axonometric view of the building, broken apart into different segments"
  />
</SplitView>

<FullBleed image={sectionFullBleedImage} />

<SplitView align="bottom" spacing="1|2">
  <Caption slot="left">
    The mulit-story atrium meanders as it travels up through the building, generating unique
    conditions. An open air plaza at the upper Columbus datum overlooks a connection to the
    underground Chicago Pedway at the lower Columbus datum.
  </Caption>
  <Image
    slot="right"
    src={sectionTallImage}
    alt="A section through the short axis of the building"
  />
</SplitView>

<SplitView align="bottom" spacing="2|1">
  <Image slot="left" src={plansAllImage} alt="37 floor plans of the tower" />
  <Caption slot="right">
    The rigidity of the structural grid and vertical circulation cores are punctuated by shifting
    floorplate openings
  </Caption>
</SplitView>

<FullBleed image={plansGroundImage} />

<SplitView align="bottom" spacing="1|1">
  <Image
    slot="left"
    src={perspectiveGroundLImage}
    alt="A man on a bicycle looks on at the rock climbers within the building"
  />
  <Image slot="right" src={perspectiveGroundRImage} alt="A woman photographs the rock climbers" />
</SplitView>

<SplitView align="center" spacing="1|2">
  <Image
    slot="left"
    src={diagramViewsArtImage}
    alt="A diagram of the views between the artist and yoga spaces"
  />
  <Image slot="right" src={plansArtImage} alt="A plan oblique drawing of the art and yoga spaces" />
</SplitView>

<SplitView align="bottom" spacing="1|1">
  <Image slot="left" src={perspectiveArtLImage} alt="Three people seated in yoga poses" />
  <Image
    slot="right"
    src={perspectiveArtRImage}
    alt="A woman paints a canvas, with the yoga class and weight lifters in the background"
  />
</SplitView>

<SplitView align="center" spacing="1|2">
  <Image
    slot="left"
    src={diagramViewsTrackImage}
    alt="A diagram of the views between the running track and the basketball court"
  />
  <Image
    slot="right"
    src={plansTrackImage}
    alt="A plan oblique drawing of the running track and the basketball court"
  />
</SplitView>

<SplitView align="bottom" spacing="1|1">
  <Image
    slot="left"
    src={perspectiveTrackLImage}
    alt="Two basketball players ready to start a game"
  />
  <Image
    slot="right"
    src={perspectiveTrackRImage}
    alt="A person looks down over the basketball game below them"
  />
</SplitView>

<SplitView align="center" spacing="1|2">
  <Image
    slot="left"
    src={diagramViewsShuffleImage}
    alt="A diagram of the views between the shuffleboard court and daycare"
  />
  <Image
    slot="right"
    src={plansShuffleImage}
    alt="A plan oblique drawing of the shuffleboard court and daycare"
  />
</SplitView>

<SplitView align="bottom" spacing="1|1">
  <Image
    slot="left"
    src={perspectiveShuffleLImage}
    alt="Three children overlook a nearby shuffleboard game"
  />
  <Image
    slot="right"
    src={perspectiveShuffleRImage}
    alt="A woman awaits her turn on a shuffleboard court. In the background, three children look on."
  />
</SplitView>

<FullBleed image={fullBleed2Image} />
