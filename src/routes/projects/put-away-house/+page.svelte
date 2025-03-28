<script lang="ts">
  import {
    Caption,
    FourImages,
    FullBleed,
    Image,
    Intro,
    NextProject,
    SplitView
  } from '$lib/projects/index';
  import FullBleedScroll from './FullBleedScroll.svelte';
  import PlanAndImages from './PlanAndImages.svelte';

  import elevationEastImage from './images/elevation-east.png?as=withColor';
  import elevationNorthDrawing from './images/elevation-north-drawing.png?as=withColor';
  import elevationNorthPhoto from './images/elevation-north-photo.jpg?as=withColor';
  import elevationWestImage from './images/elevation-west.png?as=withColor';
  import floorPlan1Image from './images/floor-plan-1.png?as=withColor';
  import floorPlan2Image from './images/floor-plan-2.png?as=withColor';
  import floorPlan3Image from './images/floor-plan-3.png?as=withColor';
  import fullBleedImage1 from './images/full-bleed-1.jpg?as=withColor';
  import fullBleedImage2 from './images/full-bleed-2.jpg?as=withColor';
  import halfBleedImage1 from './images/half-bleed-1.jpg?as=withColor';
  import process1Image from './images/process-1.jpg?as=withColor';
  import process2Image from './images/process-2.jpg?as=withColor';
  import process3Image from './images/process-3.jpg?as=withColor';
  import process4Image from './images/process-4.jpg?as=withColor';
  import sectionEastImage from './images/section-east.png?as=withColor';
  import sectionNorthDrawing from './images/section-north-drawing.png?as=withColor';
  import sectionNorthPhoto from './images/section-north-photo.jpg?as=withColor';
  import sectionWestImage from './images/section-west.png?as=withColor';
  import sitePlanImage from './images/site-plan.png?as=withColor';
  import westFacadeDetailImage from './images/west-facade-detail.jpg?as=withColor';
  import westFacadeImage from './images/west-facade.jpg?as=withColor';
  import windowImage11 from './images/window-1-1.jpg?as=withColor';
  import windowImage12 from './images/window-1-2.jpg?as=withColor';
  import windowImage13 from './images/window-1-3.jpg?as=withColor';
  import windowImage14 from './images/window-1-4.jpg?as=withColor';
  import windowImage21 from './images/window-2-1.jpg?as=withColor';
  import windowImage22 from './images/window-2-2.jpg?as=withColor';
  import windowImage23 from './images/window-2-3.jpg?as=withColor';
  import windowImage24 from './images/window-2-4.jpg?as=withColor';
  import windowImage31 from './images/window-3-1.jpg?as=withColor';
  import windowImage32 from './images/window-3-2.jpg?as=withColor';
  import windowImage33 from './images/window-3-3.jpg?as=withColor';
  import windowImage34 from './images/window-3-4.jpg?as=withColor';

  import project from './project';
</script>

<Intro {project} />

<FullBleed image={fullBleedImage1} />

<SplitView align="bottom" spacing="2|1">
  {#snippet left()}
    <Image  src={sitePlanImage} alt="Top down drawing of the building and its neighbors" />
  {/snippet}
  {#snippet right()}
    <Caption >
      The north-facing site is located in the middle of a block on Potomac Ave in Wicker Park
    </Caption>
  {/snippet}
</SplitView>

<PlanAndImages
  plan={floorPlan1Image}
  photo1={windowImage11}
  photo2={windowImage12}
  photo3={windowImage13}
  photo4={windowImage14}
  title="Ground Floor"
  subtitle="From north to south : Unit A kitchen, Unit A entry, Unit B entry, Unit A living room"
/>

<PlanAndImages
  plan={floorPlan2Image}
  photo1={windowImage21}
  photo2={windowImage22}
  photo3={windowImage23}
  photo4={windowImage24}
  title="Second Floor"
  subtitle="From north to south: Unit A bath & Unit C entry, Unit A bed & Unit C office, Unit B living room, Unit B kitchen"
/>

<PlanAndImages
  plan={floorPlan3Image}
  photo1={windowImage31}
  photo2={windowImage32}
  photo3={windowImage33}
  photo4={windowImage34}
  title="Third Floor"
  subtitle="From north to south: Unit C kitchen, Unit C living room, Unit C bedroom, Unit B bedroom"
/>

<SplitView align="bottom" spacing="1|2">
  {#snippet left()}
    <div  class="space-y-8">
      <Caption>
        Access into the building is oriented towards the east, with the three entries positioned along
        the side of the building. The exterior stairs and doors to the units meet at a shared landing.
      </Caption>

      <Image src={elevationNorthPhoto} alt="Model photo of the front facade of the building" />
    </div>
  {/snippet}
  {#snippet right()}
    <Image
      
      src={elevationNorthDrawing}
      alt="Drawing of the front facade of the building"
    />
  {/snippet}
</SplitView>

<SplitView align="bottom" spacing="1|2">
  {#snippet left()}
    <div  class="space-y-8">
      <Caption>
        A 3 foot change in floor height on either side of the shelving produces continuities between
        the living room floor and the kitchen counter, and allows objects to be shared across the
        shelving without sharing sight lines.
      </Caption>

      <Image src={sectionNorthPhoto} alt="Interior model photo of a kitchen table" />
    </div>
  {/snippet}
  {#snippet right()}
    <Image  src={sectionNorthDrawing} alt="Drawing cutting through the narrow section" />
  {/snippet}
</SplitView>

<FullBleed image={fullBleedImage2} />

<FullBleedScroll image={elevationWestImage} />
<FullBleedScroll image={sectionWestImage} />
<FullBleedScroll image={elevationEastImage} />
<FullBleedScroll image={sectionEastImage} />

<SplitView align="bottom" spacing="2|1">
  {#snippet left()}
    <Image  src={westFacadeImage} alt="Model photo of the blank west facade" />
  {/snippet}
  {#snippet right()}
    <div  class="space-y-8">
      <Caption>Operable windows punched into the west facade provide fresh air and daylight.</Caption>

      <Image
        src={westFacadeDetailImage}
        alt="Close-up model photo of one of the windows in the facade"
      />
    </div>
  {/snippet}
</SplitView>

<SplitView align="bottom" spacing="1|1">
  {#snippet left()}
    <div  class="space-y-8">
      <Caption>
        The prototype design of the shelving developed from applied surface to extruded form to grid
        of voids.
      </Caption>

      <FourImages
        src1={process1Image}
        alt1="Model photo shelving as an applied surface"
        src2={process2Image}
        alt2="Model photo of stairs moving within shelving"
        src3={process3Image}
        alt3="Model photo of shelving as occupiable space"
        src4={process4Image}
        alt4="Model photo of shelving as a grid of voids"
      />
    </div>
  {/snippet}
  {#snippet right()}
    <Image  src={halfBleedImage1} alt="Model photo of the blank west facade" />
  {/snippet}
</SplitView>

<NextProject {project} />
