<script lang="ts">
  import { Caption, FullBleed, Image, Intro, SplitView, NextProject } from '$lib/projects/index';

  import diagramDayUseImage from './images/diagram-day-use.png?as=withColor';
  import diagramProgramImage from './images/diagram-program.png?as=withColor';
  import diagramViewsArtImage from './images/diagram-views-art.png?as=withColor';
  import diagramViewsShuffleImage from './images/diagram-views-shuffle.png?as=withColor';
  import diagramViewsTrackImage from './images/diagram-views-track.png?as=withColor';
  import diagramViewsImage from './images/diagram-views.png?as=withColor';
  import fullBleed1Image from './images/full-bleed-1.jpg?as=withColor';
  import fullBleed2Image from './images/full-bleed-2.jpg?as=withColor';
  import perspectiveArtLImage from './images/perspective-art-l.jpg?as=withColor';
  import perspectiveArtRImage from './images/perspective-art-r.jpg?as=withColor';
  import perspectiveGroundLImage from './images/perspective-ground-l.jpg?as=withColor';
  import perspectiveGroundRImage from './images/perspective-ground-r.jpg?as=withColor';
  import perspectiveShuffleLImage from './images/perspective-shuffle-l.jpg?as=withColor';
  import perspectiveShuffleRImage from './images/perspective-shuffle-r.jpg?as=withColor';
  import perspectiveTrackLImage from './images/perspective-track-l.jpg?as=withColor';
  import perspectiveTrackRImage from './images/perspective-track-r.jpg?as=withColor';
  import plansAllImage from './images/plans-all.png?as=withColor';
  import plansArtImage from './images/plans-art.png?as=withColor';
  import plansGroundImage from './images/plans-ground.jpg?as=withColor';
  import plansShuffleImage from './images/plans-shuffle.png?as=withColor';
  import plansTrackImage from './images/plans-track.png?as=withColor';
  import sectionFullBleedImage from './images/section-full-bleed.jpg?as=withColor';
  import sectionTallImage from './images/section-tall.png?as=withColor';
  import sitePlanImage from './images/site-plan.jpg?as=withColor';

  import project from './project';
</script>

<Intro {project} />

<FullBleed image={fullBleed1Image} />

<SplitView align="top" spacing="2|1">
  {#snippet left()}
    <Image
      src={sitePlanImage}
      alt="A top down map of the mouth of the Chicago river and the surrounding streets and buildings"
    />
  {/snippet}
  {#snippet right()}
    <Caption>
      In red, the site is located at 250 N Upper Columbus Drive, near the mouth of the Chicago River
    </Caption>
  {/snippet}
</SplitView>

<SplitView align="center" spacing="1|2">
  {#snippet left()}
    <Caption>
      In blue, a sampling of the typical age of a gym visitor throughout a typical day. In red, a
      sampling of one individual's gym habits across their lifetime.
    </Caption>
  {/snippet}
  {#snippet right()}
    <Image
      src={diagramDayUseImage}
      alt="A graph showing the time of day that people of different ages visit the gym"
    />
  {/snippet}
</SplitView>

<SplitView align="center" spacing="2|1">
  {#snippet left()}
    <Image
      src={diagramViewsImage}
      alt="Two people looking at each other from across a break in the floor"
    />
  {/snippet}
  {#snippet right()}
    <Caption>
      Visual studies on changing field of view when adjacent floor plates are shifted vertically and
      horizontally.
    </Caption>
  {/snippet}
</SplitView>

<SplitView align="center" spacing="1|2">
  {#snippet left()}
    <Caption>
      Floor plates are split by a large atrium, allowing vertical shifts which create new
      adjacencies between disparate programs.
    </Caption>
  {/snippet}
  {#snippet right()}
    <Image
      src={diagramProgramImage}
      alt="An exploded axonometric view of the building, broken apart into different segments"
    />
  {/snippet}
</SplitView>

<FullBleed image={sectionFullBleedImage} />

<SplitView align="bottom" spacing="1|2">
  {#snippet left()}
    <Caption>
      The mulit-story atrium meanders as it travels up through the building, generating unique
      conditions. An open air plaza at the upper Columbus datum overlooks a connection to the
      underground Chicago Pedway at the lower Columbus datum.
    </Caption>
  {/snippet}
  {#snippet right()}
    <Image src={sectionTallImage} alt="A section through the short axis of the building" />
  {/snippet}
</SplitView>

<SplitView align="bottom" spacing="2|1">
  {#snippet left()}
    <Image src={plansAllImage} alt="37 floor plans of the tower" />
  {/snippet}
  {#snippet right()}
    <Caption>
      The rigidity of the structural grid and vertical circulation cores are punctuated by shifting
      floorplate openings
    </Caption>
  {/snippet}
</SplitView>

<FullBleed image={plansGroundImage} />

<SplitView align="bottom" spacing="1|1">
  {#snippet left()}
    <Image
      src={perspectiveGroundLImage}
      alt="A man on a bicycle looks on at the rock climbers within the building"
    />
  {/snippet}
  {#snippet right()}
    <Image src={perspectiveGroundRImage} alt="A woman photographs the rock climbers" />
  {/snippet}
</SplitView>

<SplitView align="center" spacing="1|2">
  {#snippet left()}
    <Image
      src={diagramViewsArtImage}
      alt="A diagram of the views between the artist and yoga spaces"
    />
  {/snippet}
  {#snippet right()}
    <Image src={plansArtImage} alt="A plan oblique drawing of the art and yoga spaces" />
  {/snippet}
</SplitView>

<SplitView align="bottom" spacing="1|1">
  {#snippet left()}
    <Image src={perspectiveArtLImage} alt="Three people seated in yoga poses" />
  {/snippet}
  {#snippet right()}
    <Image
      src={perspectiveArtRImage}
      alt="A woman paints a canvas, with the yoga class and weight lifters in the background"
    />
  {/snippet}
</SplitView>

<SplitView align="center" spacing="1|2">
  {#snippet left()}
    <Image
      src={diagramViewsTrackImage}
      alt="A diagram of the views between the running track and the basketball court"
    />
  {/snippet}
  {#snippet right()}
    <Image
      src={plansTrackImage}
      alt="A plan oblique drawing of the running track and the basketball court"
    />
  {/snippet}
</SplitView>

<SplitView align="bottom" spacing="1|1">
  {#snippet left()}
    <Image src={perspectiveTrackLImage} alt="Two basketball players ready to start a game" />
  {/snippet}
  {#snippet right()}
    <Image
      src={perspectiveTrackRImage}
      alt="A person looks down over the basketball game below them"
    />
  {/snippet}
</SplitView>

<SplitView align="center" spacing="1|2">
  {#snippet left()}
    <Image
      src={diagramViewsShuffleImage}
      alt="A diagram of the views between the shuffleboard court and daycare"
    />
  {/snippet}
  {#snippet right()}
    <Image
      src={plansShuffleImage}
      alt="A plan oblique drawing of the shuffleboard court and daycare"
    />
  {/snippet}
</SplitView>

<SplitView align="bottom" spacing="1|1">
  {#snippet left()}
    <Image
      src={perspectiveShuffleLImage}
      alt="Three children overlook a nearby shuffleboard game"
    />
  {/snippet}
  {#snippet right()}
    <Image
      src={perspectiveShuffleRImage}
      alt="A woman awaits her turn on a shuffleboard court. In the background, three children look on."
    />
  {/snippet}
</SplitView>

<FullBleed image={fullBleed2Image} />

<NextProject {project} />
