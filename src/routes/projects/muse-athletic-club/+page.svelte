<script lang="ts">
  import {
    Description,
    FourImages,
    Caption,
    FullBleed,
    Image,
    Intro,
    SplitView,
    Video
  } from '$lib/projects/index';

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
  <Image slot="left" src={sitePlanImage} alt="TBD" />
  <Caption slot="right">
    In red, the site is located at 250 N Upper Columbus Drive, near the mouth of the Chicago River
  </Caption>
</SplitView>

<SplitView align="center" spacing="1|2">
  <Caption slot="left">
    In blue, a sampling of the typical age of a gym visitor throughout a typical day. In red, a
    sampling of one individual's gym habits across their lifetime.
  </Caption>
  <Image slot="right" src={diagramDayUseImage} alt="TBD" />
</SplitView>

<SplitView align="center" spacing="2|1">
  <Image slot="left" src={diagramViewsImage} alt="TBD" />
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
  <Image slot="right" src={diagramProgramImage} alt="TBD" />
</SplitView>

<FullBleed image={sectionFullBleedImage} />

<SplitView align="bottom" spacing="1|2">
  <Caption slot="left">
    The mulit-story atrium meanders as it travels up through the building, generating unique
    conditions. An open air plaza at the upper Columbus datum overlooks a connection to the
    underground Chicago Pedway at the lower Columbus datum.
  </Caption>
  <Image slot="right" src={sectionTallImage} alt="TBD" />
</SplitView>

<SplitView align="bottom" spacing="2|1">
  <Image slot="left" src={plansAllImage} alt="TBD" />
  <Caption slot="right">
    The rigidity of the structural grid and vertical circulation cores are punctuated by shifting
    floorplate openings
  </Caption>
</SplitView>

<FullBleed image={plansGroundImage} />

<SplitView align="bottom" spacing="1|1">
  <Image slot="left" src={perspectiveGroundLImage} alt="TBD" />
  <Image slot="right" src={perspectiveGroundRImage} alt="TBD" />
</SplitView>

<SplitView align="center" spacing="1|2">
  <Image slot="left" src={diagramViewsArtImage} alt="TBD" />
  <Image slot="right" src={plansArtImage} alt="TBD" />
</SplitView>

<SplitView align="bottom" spacing="1|1">
  <Image slot="left" src={perspectiveArtLImage} alt="TBD" />
  <Image slot="right" src={perspectiveArtRImage} alt="TBD" />
</SplitView>

<SplitView align="center" spacing="1|2">
  <Image slot="left" src={diagramViewsTrackImage} alt="TBD" />
  <Image slot="right" src={plansTrackImage} alt="TBD" />
</SplitView>

<SplitView align="bottom" spacing="1|1">
  <Image slot="left" src={perspectiveTrackLImage} alt="TBD" />
  <Image slot="right" src={perspectiveTrackRImage} alt="TBD" />
</SplitView>

<SplitView align="center" spacing="1|2">
  <Image slot="left" src={diagramViewsShuffleImage} alt="TBD" />
  <Image slot="right" src={plansShuffleImage} alt="TBD" />
</SplitView>

<SplitView align="bottom" spacing="1|1">
  <Image slot="left" src={perspectiveShuffleLImage} alt="TBD" />
  <Image slot="right" src={perspectiveShuffleRImage} alt="TBD" />
</SplitView>

<FullBleed image={fullBleed2Image} />
