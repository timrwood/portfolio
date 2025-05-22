<script lang="ts">
  import { Image, Intro, NextProject, SplitView } from '$lib/projects';
  import FullBleedScroll from './FullBleedScroll.svelte';

  import coverImage from './images/cover.jpg?as=withColor';
  import explodedAxonImage from './images/exploded-axon.png?as=withColor';
  import floorPlanRenderImage from './images/floor-plan-render.jpg?as=withColor';
  import furniture1Image from './images/furniture-1.png?as=withColor';
  import furniture2Image from './images/furniture-2.png?as=withColor';
  import furniture3Image from './images/furniture-3.png?as=withColor';
  import muralImage from './images/mural.jpg?as=withColor';
  import nolliPlanImage from './images/nolli-plan.png?as=withColor';
  import perspective1Image from './images/perspective-1.jpg?as=withColor';
  import perspective2Image from './images/perspective-2.jpg?as=withColor';
  import planLongImage from './images/plan-long.jpg?as=withColor';
  import planNeighborhoodImage from './images/plan-neighborhood.jpg?as=withColor';
  import planObliqueImage from './images/plan-oblique.jpg?as=withColor';
  import precedentFamilistereImage from './images/precedent-familistere.png?as=withColor';
  import precedentHomesgarthImage from './images/precedent-homesgarth.png?as=withColor';
  import precedentUniteImage from './images/precedent-unite.png?as=withColor';
  import projectPlanImage from './images/project-plan.jpg?as=withColor';
  import sectionWideImage from './images/section-wide.jpg?as=withColor';
  import sectionImage from './images/section.png?as=withColor';
  import site1Image from './images/site-1.jpg?as=withColor';
  import site2Image from './images/site-2.jpg?as=withColor';
  import timelineImage from './images/timeline.png?as=withColor';
  import unitPlanImage from './images/unit-plan.png?as=withColor';

  import project from './project';
</script>

<Intro {project} />

<div class="my-12 my-18 px-3 lg:my-24">
  <div class="flex flex-col gap-12 lg:flex-row">
    <div class="shrink grow">
      <Image src={precedentHomesgarthImage} alt="TBD" />
      <div class="py-2"><strong>Homesgarth</strong>, Ebenezer Howard, 1909</div>
    </div>
    <div class="shrink grow">
      <Image src={precedentFamilistereImage} alt="TBD" />
      <div class="py-2"><strong>Le Familistère Guise</strong>, Jean-Baptiste André Godin, 1859</div>
    </div>
    <div class="shrink grow">
      <Image src={precedentUniteImage} alt="TBD" />
      <div class="py-2"><strong>Unité d'habitation</strong>, Le Corbusier, 1952</div>
    </div>
  </div>
</div>

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image src={explodedAxonImage} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={planObliqueImage} alt="TBD" />
  {/snippet}
</SplitView>

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image src={unitPlanImage} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={planLongImage} alt="TBD" />
  {/snippet}
</SplitView>

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image src={timelineImage} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={sectionWideImage} alt="TBD" />
  {/snippet}
</SplitView>

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image src={site1Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={site2Image} alt="TBD" />
  {/snippet}
</SplitView>

<FullBleedScroll image={planNeighborhoodImage} />

<SplitView align="center" spacing="1|2">
  {#snippet left()}
    <Image src={floorPlanRenderImage} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={muralImage} alt="TBD" />
  {/snippet}
</SplitView>

<FullBleedScroll image={sectionImage} />
<FullBleedScroll image={nolliPlanImage} />
<FullBleedScroll image={projectPlanImage} />

<FullBleedScroll image={furniture1Image} />
<FullBleedScroll image={furniture2Image} />
<FullBleedScroll image={furniture3Image} />

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image src={perspective1Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={perspective2Image} alt="TBD" />
  {/snippet}
</SplitView>

<NextProject {project} />
