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

  import conceptModelImage from './images/concept-model.jpg?as=lqip';
  import drawingShortElevationImage from './images/drawing-short-elevation.jpg?as=lqip';
  import drawingShortSectionImage from './images/drawing-short-section.jpg?as=lqip';
  import drawingSouthElevationImage from './images/drawing-south-elevation.jpg?as=lqip';
  import drawingSouthSectionImage from './images/drawing-south-section.jpg?as=lqip';
  import history1Image from './images/history-1.jpg?as=lqip';
  import history2Image from './images/history-2.jpg?as=lqip';
  import history3Image from './images/history-3.jpg?as=lqip';
  import materialAllImage from './images/material-all.jpg?as=lqip';
  import materialFeltImage from './images/material-felt.jpg?as=lqip';
  import materialWoodImage from './images/material-wood.jpg?as=lqip';
  import model1Image from './images/model-1.jpg?as=lqip';
  import model2Image from './images/model-2.jpg?as=lqip';
  import planImage from './images/plan.jpg?as=lqip';
  import render2Image from './images/render-2.jpg?as=lqip';
  import render3Image from './images/render-3.jpg?as=lqip';
  import render4Image from './images/render-4.jpg?as=lqip';
  import render5Image from './images/render-5.jpg?as=lqip';
  import render6Image from './images/render-6.jpg?as=lqip';
  import render7Image from './images/render-7.jpg?as=lqip';
  import render8Image from './images/render-8.jpg?as=lqip';
  import siteContextImage from './images/site-context.png?as=lqip';
  import siteElevationImage from './images/site-elevation.jpg?as=lqip';

  import project from './project';
</script>

<Intro {project} />

<SplitView align="bottom" spacing="1|1">
  <Image slot="left" src={history1Image} alt="TBD" />
  <Image slot="right" src={history2Image} alt="TBD" />
</SplitView>

<SplitView align="bottom" spacing="2|1">
  <Image slot="left" src={history3Image} alt="TBD" />
  <Image slot="right" src={siteContextImage} alt="TBD" />
</SplitView>

<FullBleed image={conceptModelImage} />

<FullBleed image={siteElevationImage} />

<FullBleed image={planImage} />

<FullBleedScroll image={drawingSouthElevationImage} />
<FullBleedScroll image={drawingSouthSectionImage} />
<FullBleedScroll image={drawingShortElevationImage} />
<FullBleedScroll image={drawingShortSectionImage} />

<SplitView align="bottom" spacing="1|1">
  <Image slot="left" src={render2Image} alt="TBD" />
  <FourImages
    slot="right"
    src1={render3Image}
    alt1="TBD"
    src2={render4Image}
    alt2="TBD"
    src3={render5Image}
    alt3="TBD"
    src4={render6Image}
    alt4="TBD"
  />
</SplitView>

<Video id="u6pyWtG-CXw" />

<FullBleedScroll image={render7Image} />
<FullBleedScroll image={render8Image} />

<SplitView align="bottom" spacing="2|1">
  <Image slot="left" src={model1Image} alt="TBD" />
  <Image slot="right" src={model2Image} alt="TBD" />
</SplitView>

<FullBleed image={materialWoodImage} />

<SplitView align="top" spacing="1|2">
  <Image slot="left" src={materialFeltImage} alt="TBD" />
  <Image slot="right" src={materialAllImage} alt="TBD" />
</SplitView>

<NextProject {project} />
