<script lang="ts">
  import { Intro, FullBleed, SingleTwoThird } from '$lib/projects/index';
  import PlanAndImages from './PlanAndImages.svelte';

  import fullBleedImage1 from './full-bleed-1.jpg';
  import sitePlanImage from './site-plan.png';
  import floorPlan1Image from './floor-plan-1.png';
  import floorPlan2Image from './floor-plan-2.png';
  import floorPlan3Image from './floor-plan-3.png';
  import windowImage11 from './window-1-1.jpg';
  import windowImage12 from './window-1-2.jpg';
  import windowImage13 from './window-1-3.jpg';
  import windowImage14 from './window-1-4.jpg';
  import windowImage21 from './window-2-1.jpg';
  import windowImage22 from './window-2-2.jpg';
  import windowImage23 from './window-2-3.jpg';
  import windowImage24 from './window-2-4.jpg';
  import windowImage31 from './window-3-1.jpg';
  import windowImage32 from './window-3-2.jpg';
  import windowImage33 from './window-3-3.jpg';
  import windowImage34 from './window-3-4.jpg';

  import { intro } from './data';
</script>

<Intro {intro} />

<FullBleed image={fullBleedImage1} />

<SingleTwoThird
  image={sitePlanImage}
  caption="The north-facing site is located in the middle of a block on Potomac Ave in Wicker Park"
/>

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
