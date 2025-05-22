<script lang="ts">
  import { Image, Intro, NextProject, SplitView, SingleView, Caption } from '$lib/projects';
  import FullBleedScroll from './FullBleedScroll.svelte';
  import FixedImage from './FixedImage.svelte';

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
  import sectionWideImage from './images/section-wide.jpg?as=withColor';
  import sectionImage from './images/section.png?as=withColor';
  import site1Image from './images/site-1.jpg?as=withColor';
  import site2Image from './images/site-2.jpg?as=withColor';
  import timelineImage from './images/timeline.png?as=withColor';
  import unitPlanImage from './images/unit-plan.png?as=withColor';

  import project from './project';
</script>

<Intro {project} />

<SingleView>
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
</SingleView>

<SplitView align="center" spacing="2|1">
  {#snippet left()}
    <Image src={timelineImage} alt="TBD" />
  {/snippet}
  {#snippet right()}{/snippet}
</SplitView>

<SplitView align="bottom" spacing="2|1">
  {#snippet left()}
    <Image src={site1Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Caption>
      The proposal is a monolithic housing collective that spans 3 city blocks, and sits on the
      viaduct of an unused rail line.
    </Caption>
    <Image src={site2Image} alt="TBD" />
  {/snippet}
</SplitView>

<FixedImage image={furniture1Image} />
<FixedImage image={furniture2Image} />
<FixedImage image={furniture3Image} />

<SingleView>
  <Image src={unitPlanImage} alt="TBD" />
</SingleView>

<SplitView align="bottom" spacing="1|1">
  {#snippet left()}
    <Image src={floorPlanRenderImage} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Caption>
      The housing units follow the linear form of the former railroad, on a single-loaded corridor
      with the open-air balcony overlooking Douglass Park.
    </Caption>
    <Caption>
      The circulation runs through the balconies of each unit, which are each extensions of their
      associated unit, a sort of individual porch or outdoor living room. Within the unit, all
      furniture is built into wooden cores, with a kitchenettes, restrooms, baths, beds, and studies
      embedded within. Different unit sizes accommodate different family sizes, and as new children
      arrive, or older children move out, the family can relocate to an appropriately sized unit.
    </Caption>
    <Image src={planObliqueImage} alt="TBD" />
  {/snippet}
</SplitView>

<SplitView align="bottom" spacing="1|2">
  {#snippet left()}
    <Caption>
      The doors of the furniture are aligned so that two facing panels can be opened to form a new
      room, or closed when the division of space is not needed.
    </Caption>
    <Image src={perspective2Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={perspective1Image} alt="TBD" />
  {/snippet}
</SplitView>

<SingleView>
  <div class="relative right-1/2 left-1/2 m-[0_-50vw] w-[100vw] space-y-48 py-24">
    <Image src={planLongImage} alt="TBD" />
    <Image src={sectionWideImage} alt="TBD" />
  </div>
</SingleView>

<FullBleedScroll image={planNeighborhoodImage} />

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image src={explodedAxonImage} alt="TBD" />
    <Caption>
      Domestic labor is redistributed to programs placed in the neighborhood and connected back to
      the housing form with raised corridors. Collective meals are hosted in the shared kitchen and
      dining facility, and an on-site cafe is open to both residents and the public. A laundry
      service takes dirty clothes and returns them washed and folded.
    </Caption>
    <Caption>
      Children are cared for at different ages in different facilities, with a nursery and daycare
      for young children, an after school program for the nearby elementary and middle school, and a
      recreation center for older children.
    </Caption>
  {/snippet}
  {#snippet right()}
    <Image src={muralImage} alt="TBD" className="mix-blend-multiply" />
  {/snippet}
</SplitView>

<SingleView>
  <Image src={nolliPlanImage} alt="TBD" />
</SingleView>

<SingleView>
  <Image src={sectionImage} alt="TBD" />
</SingleView>

<NextProject {project} />
