<script lang="ts">
  import {
    Caption,
    FullBleed,
    Image,
    Intro,
    FourImages,
    SplitView,
    NextProject
  } from '$lib/projects/index';

  import animationImage from './images/animation.webp?as=withColor';
  import coverImage from './images/cover.jpg?as=withColor';
  import elevationsImage from './images/elevations.jpg?as=withColor';
  import explodedImage from './images/exploded.jpg?as=withColor';
  import fullBleedImage from './images/full-bleed.jpg?as=withColor';
  import introImage from './images/intro.jpg?as=withColor';
  import isoImage from './images/iso.jpg?as=withColor';
  import midtermElevationLongImage from './images/midterm-elevation-long.jpg?as=withColor';
  import midtermElevationShortImage from './images/midterm-elevation-short.jpg?as=withColor';
  import midtermIso1Image from './images/midterm-iso-1.jpg?as=withColor';
  import midtermIso2Image from './images/midterm-iso-2.jpg?as=withColor';
  import midtermPerspectiveImage from './images/midterm-perspective.jpg?as=withColor';
  import midtermPlanImage from './images/midterm-plan.jpg?as=withColor';
  import midtermSectionLongImage from './images/midterm-section-long.jpg?as=withColor';
  import midtermSectionShortImage from './images/midterm-section-short.jpg?as=withColor';
  import perspective1Image from './images/perspective-1.jpg?as=withColor';
  import perspective2Image from './images/perspective-2.jpg?as=withColor';
  import planImage from './images/plan.jpg?as=withColor';
  import sectionsImage from './images/sections.jpg?as=withColor';
  import wallDentImage from './images/wall-dent.jpg?as=withColor';
  import wallDepthIsoImage from './images/wall-depth-iso.jpg?as=withColor';
  import wallDepthImage from './images/wall-depth.jpg?as=withColor';
  import wallSliceDetailImage from './images/wall-slice-detail.jpg?as=withColor';
  import wallSliceImage from './images/wall-slice.jpg?as=withColor';
  import warmupLargeBackImage from './images/warmup-large-back.jpg?as=withColor';
  import warmupLargeFrontImage from './images/warmup-large-front.jpg?as=withColor';
  import warmupMediumBackImage from './images/warmup-medium-back.jpg?as=withColor';
  import warmupMediumFrontImage from './images/warmup-medium-front.jpg?as=withColor';
  import warmupShapeBackImage from './images/warmup-shape-back.jpg?as=withColor';
  import warmupShapeFrontImage from './images/warmup-shape-front.jpg?as=withColor';
  import warmupSmallBackImage from './images/warmup-small-back.jpg?as=withColor';
  import warmupSmallFrontImage from './images/warmup-small-front.jpg?as=withColor';
  import wedgeBrickImage from './images/wedge-brick.jpg?as=withColor';
  import wedgeFormLargeImage from './images/wedge-form-large.jpg?as=withColor';
  import wedgeFormMediumImage from './images/wedge-form-medium.jpg?as=withColor';
  import wedgeFormSmallImage from './images/wedge-form-small.jpg?as=withColor';
  import wedgeWallDetailImage from './images/wedge-wall-detail.jpg?as=withColor';
  import wedgeWallImage from './images/wedge-wall.jpg?as=withColor';

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

<NextProject {project} />
