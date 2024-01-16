<script lang="ts">
  import { Caption, FullBleed, Image, Intro, SplitView } from '$lib/projects/index';

  import animationImage from './images/animation.webp';
  import coverImage from './images/cover.jpg';
  import elevationsImage from './images/elevations.jpg';
  import fullBleedImage from './images/full-bleed.jpg';
  import introImage from './images/intro.jpg';
  import isoImage from './images/iso.jpg';
  import perspective1Image from './images/perspective-1.jpg';
  import perspective2Image from './images/perspective-2.jpg';
  import sectionsImage from './images/sections.jpg';

  import { intro } from './data';
</script>

<Intro {intro} />

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

<br />

Wedge Wall & Detail

<br />

Wedge brick & Form small

<br />

form medium & Form large

<br />

Midterm ISO-1 and Perspective-1

<br />

Midterm iso-2 and Plan

<br />

Midterm Elevation & Section long

<br />

Midterm Elevation & Section short

<br />

Walls slice & slice iso

<br />

Wedge depth & wedge iso

<br />

Wedge stair + dent

<br />

Shape front + back

<br />

Small front + back

<br />

Medium front + back

<br />

Large front + back
