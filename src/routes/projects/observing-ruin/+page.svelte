<script lang="ts">
  import {
    FourImages,
    FullBleed,
    Image,
    Intro,
    NextProject,
    SplitView,
    Video
  } from '$lib/projects/index';
  import FullBleedScroll from './FullBleedScroll.svelte';

  import conceptModelImage from './images/concept-model.jpg?as=withColor';
  import drawingShortElevationImage from './images/drawing-short-elevation.jpg?as=withColor';
  import drawingShortSectionImage from './images/drawing-short-section.jpg?as=withColor';
  import drawingSouthElevationImage from './images/drawing-south-elevation.jpg?as=withColor';
  import drawingSouthSectionImage from './images/drawing-south-section.jpg?as=withColor';
  import history1Image from './images/history-1.jpg?as=withColor';
  import history2Image from './images/history-2.jpg?as=withColor';
  import history3Image from './images/history-3.jpg?as=withColor';
  import materialAllImage from './images/material-all.jpg?as=withColor';
  import materialFeltImage from './images/material-felt.jpg?as=withColor';
  import materialWoodImage from './images/material-wood.jpg?as=withColor';
  import model1Image from './images/model-1.jpg?as=withColor';
  import model2Image from './images/model-2.jpg?as=withColor';
  import planImage from './images/plan.jpg?as=withColor';
  import render2Image from './images/render-2.jpg?as=withColor';
  import render3Image from './images/render-3.jpg?as=withColor';
  import render4Image from './images/render-4.jpg?as=withColor';
  import render5Image from './images/render-5.jpg?as=withColor';
  import render6Image from './images/render-6.jpg?as=withColor';
  import render7Image from './images/render-7.jpg?as=withColor';
  import render8Image from './images/render-8.jpg?as=withColor';
  import siteContextImage from './images/site-context.png?as=withColor';
  import siteElevationImage from './images/site-elevation.jpg?as=withColor';

  import project from './project';
</script>

<Intro {project} />

<SplitView align="bottom" spacing="1|1">
  {#snippet left()}
    <Image src={history1Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={history2Image} alt="TBD" />
  {/snippet}
</SplitView>

<SplitView align="bottom" spacing="2|1">
  {#snippet left()}
    <Image src={history3Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={siteContextImage} alt="TBD" />
  {/snippet}
</SplitView>

<FullBleed image={conceptModelImage} />

<FullBleed image={siteElevationImage} />

<FullBleed image={planImage} />

<FullBleedScroll image={drawingSouthElevationImage} />
<FullBleedScroll image={drawingSouthSectionImage} />
<FullBleedScroll image={drawingShortElevationImage} />
<FullBleedScroll image={drawingShortSectionImage} />

<SplitView align="bottom" spacing="1|1">
  {#snippet left()}
    <Image src={render2Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <FourImages
      src1={render3Image}
      alt1="TBD"
      src2={render4Image}
      alt2="TBD"
      src3={render5Image}
      alt3="TBD"
      src4={render6Image}
      alt4="TBD"
    />
  {/snippet}
</SplitView>

<Video id="u6pyWtG-CXw" />

<FullBleedScroll image={render7Image} />
<FullBleedScroll image={render8Image} />

<SplitView align="bottom" spacing="2|1">
  {#snippet left()}
    <Image src={model1Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={model2Image} alt="TBD" />
  {/snippet}
</SplitView>

<FullBleed image={materialWoodImage} />

<SplitView align="top" spacing="1|2">
  {#snippet left()}
    <Image src={materialFeltImage} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={materialAllImage} alt="TBD" />
  {/snippet}
</SplitView>

<NextProject {project} />
