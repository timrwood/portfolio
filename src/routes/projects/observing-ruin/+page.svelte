<script lang="ts">
  import { FullBleed, Image, Intro, SplitView, FourImages, Video } from '$lib/projects/index';
  import FullBleedScroll from './FullBleedScroll.svelte';

  import conceptModelImage from './images/concept-model.jpg';
  import drawingShortElevationImage from './images/drawing-short-elevation.jpg';
  import drawingShortSectionImage from './images/drawing-short-section.jpg';
  import drawingSouthElevationImage from './images/drawing-south-elevation.jpg';
  import drawingSouthSectionImage from './images/drawing-south-section.jpg';
  import history1Image from './images/history-1.jpg';
  import history2Image from './images/history-2.jpg';
  import history3Image from './images/history-3.jpg';
  import materialAllImage from './images/material-all.jpg';
  import materialFeltImage from './images/material-felt.jpg';
  import materialWoodImage from './images/material-wood.jpg';
  import model1Image from './images/model-1.jpg';
  import model2Image from './images/model-2.jpg';
  import planImage from './images/plan.jpg';
  import render2Image from './images/render-2.jpg';
  import render3Image from './images/render-3.jpg';
  import render4Image from './images/render-4.jpg';
  import render5Image from './images/render-5.jpg';
  import render6Image from './images/render-6.jpg';
  import render7Image from './images/render-7.jpg';
  import render8Image from './images/render-8.jpg';
  import siteContextImage from './images/site-context.png';
  import siteElevationImage from './images/site-elevation.jpg';

  import { intro } from './data';
</script>

<Intro {intro} />

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
