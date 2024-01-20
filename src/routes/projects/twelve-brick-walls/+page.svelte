<script lang="ts">
  import { Caption, FullBleed, Image, Intro, FourImages, SplitView } from '$lib/projects/index';

  import animationImage from './images/animation.webp';
  import coverImage from './images/cover.jpg';
  import elevationsImage from './images/elevations.jpg';
  import explodedImage from './images/exploded.jpg';
  import fullBleedImage from './images/full-bleed.jpg';
  import introImage from './images/intro.jpg';
  import isoImage from './images/iso.jpg';
  import midtermElevationLongImage from './images/midterm-elevation-long.jpg';
  import midtermElevationShortImage from './images/midterm-elevation-short.jpg';
  import midtermIso1Image from './images/midterm-iso-1.jpg';
  import midtermIso2Image from './images/midterm-iso-2.jpg';
  import midtermPerspectiveImage from './images/midterm-perspective.jpg';
  import midtermPlanImage from './images/midterm-plan.jpg';
  import midtermSectionLongImage from './images/midterm-section-long.jpg';
  import midtermSectionShortImage from './images/midterm-section-short.jpg';
  import perspective1Image from './images/perspective-1.jpg';
  import perspective2Image from './images/perspective-2.jpg';
  import planImage from './images/plan.jpg';
  import sectionsImage from './images/sections.jpg';
  import wallDentImage from './images/wall-dent.jpg';
  import wallDepthIsoImage from './images/wall-depth-iso.jpg';
  import wallDepthImage from './images/wall-depth.jpg';
  import wallSliceDetailImage from './images/wall-slice-detail.jpg';
  import wallSliceImage from './images/wall-slice.jpg';
  import warmupLargeBackImage from './images/warmup-large-back.jpg';
  import warmupLargeFrontImage from './images/warmup-large-front.jpg';
  import warmupMediumBackImage from './images/warmup-medium-back.jpg';
  import warmupMediumFrontImage from './images/warmup-medium-front.jpg';
  import warmupShapeBackImage from './images/warmup-shape-back.jpg';
  import warmupShapeFrontImage from './images/warmup-shape-front.jpg';
  import warmupSmallBackImage from './images/warmup-small-back.jpg';
  import warmupSmallFrontImage from './images/warmup-small-front.jpg';
  import wedgeBrickImage from './images/wedge-brick.jpg';
  import wedgeFormLargeImage from './images/wedge-form-large.jpg';
  import wedgeFormMediumImage from './images/wedge-form-medium.jpg';
  import wedgeFormSmallImage from './images/wedge-form-small.jpg';
  import wedgeWallDetailImage from './images/wedge-wall-detail.jpg';
  import wedgeWallImage from './images/wedge-wall.jpg';

  import project from './project';
</script>

<Intro {project} />

<SplitView align="bottom" spacing="1|1">
  <Image slot="left" src={animationImage} alt="TBD" />
  <Image slot="right" src={isoImage} alt="TBD" />
</SplitView>

<SplitView align="top" spacing="2|1">
  <Image slot="left" src={perspective1Image} alt="TBD" />
  <Image slot="right" src={perspective2Image} alt="TBD" />
</SplitView>

<FullBleed image={fullBleedImage} />

<SplitView align="top" spacing="1|1">
  <Image slot="left" src={elevationsImage} alt="TBD" />
  <Image slot="right" src={sectionsImage} alt="TBD" />
</SplitView>

<SplitView align="bottom" spacing="2|1">
  <Image slot="left" src={wedgeWallImage} alt="TBD" />
  <Image slot="right" src={wedgeWallDetailImage} alt="TBD" />
</SplitView>

<SplitView align="top" spacing="1|2">
  <Image slot="left" src={wedgeBrickImage} alt="TBD" />
  <Image slot="right" src={wedgeFormSmallImage} alt="TBD" />
</SplitView>

<SplitView align="top" spacing="1|1">
  <Image slot="left" src={wedgeFormMediumImage} alt="TBD" />
  <Image slot="right" src={wedgeFormLargeImage} alt="TBD" />
</SplitView>

<SplitView align="bottom" spacing="1|1">
  <Image slot="left" src={midtermIso1Image} alt="TBD" />
  <Image slot="right" src={midtermPerspectiveImage} alt="TBD" />
</SplitView>

<SplitView align="bottom" spacing="1|1">
  <Image slot="left" src={midtermIso2Image} alt="TBD" />
  <Image slot="right" src={midtermPlanImage} alt="TBD" />
</SplitView>

<SplitView align="bottom" spacing="1|1">
  <Image slot="left" src={midtermElevationLongImage} alt="TBD" />
  <Image slot="right" src={midtermSectionLongImage} alt="TBD" />
</SplitView>

<SplitView align="bottom" spacing="1|1">
  <Image slot="left" src={midtermElevationShortImage} alt="TBD" />
  <Image slot="right" src={midtermSectionShortImage} alt="TBD" />
</SplitView>

<SplitView align="top" spacing="1|1">
  <Image slot="left" src={wallSliceImage} alt="TBD" />

  <FourImages
    slot="right"
    alt1="TBD"
    alt2="TBD"
    alt3="TBD"
    alt4="TBD"
    src1={wallSliceDetailImage}
    src2={wallDentImage}
    src3={wallDepthImage}
    src4={wallDepthIsoImage}
  />
</SplitView>

<SplitView align="top" spacing="1|1">
  <FourImages
    slot="left"
    alt1="TBD"
    alt2="TBD"
    alt3="TBD"
    alt4="TBD"
    src1={warmupShapeFrontImage}
    src2={warmupSmallFrontImage}
    src3={warmupShapeBackImage}
    src4={warmupSmallBackImage}
  />

  <FourImages
    slot="right"
    alt1="TBD"
    alt2="TBD"
    alt3="TBD"
    alt4="TBD"
    src1={warmupMediumFrontImage}
    src2={warmupLargeFrontImage}
    src3={warmupMediumBackImage}
    src4={warmupLargeBackImage}
  />
</SplitView>
