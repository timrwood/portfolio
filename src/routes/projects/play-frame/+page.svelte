<script lang="ts">
  import { FourImages, FullBleed, Image, Intro, NextProject, SplitView } from '$lib/projects/index';

  import construction1Image from './images/construction-1.jpg?as=withColor';
  import construction2Image from './images/construction-2.jpg?as=withColor';
  import construction3Image from './images/construction-3.jpg?as=withColor';
  import construction4Image from './images/construction-4.jpg?as=withColor';
  import elevation1Image from './images/elevation-1.png?as=withColor';
  import elevation2Image from './images/elevation-2.png?as=withColor';
  import fullBleed1Image from './images/full-bleed-1.jpg?as=withColor';
  import fullBleed2Image from './images/full-bleed-2.jpg?as=withColor';
  import fullBleed3Image from './images/full-bleed-3.jpg?as=withColor';
  import fullBleed4Image from './images/full-bleed-4.jpg?as=withColor';
  import plan1Image from './images/plan-1.png?as=withColor';
  import plan2Image from './images/plan-2.png?as=withColor';
  import plan3Image from './images/plan-3.png?as=withColor';
  import plan4Image from './images/plan-4.png?as=withColor';
  import roofSummerImage from './images/roof-summer.jpg?as=withColor';
  import roofWinterImage from './images/roof-winter.jpg?as=withColor';
  import section1Image from './images/section-1.png?as=withColor';
  import section2Image from './images/section-2.png?as=withColor';
  import square1Image from './images/square-1.jpg?as=withColor';
  import square2Image from './images/square-2.jpg?as=withColor';
  import square3Image from './images/square-3.jpg?as=withColor';
  import square4Image from './images/square-4.jpg?as=withColor';
  import square5Image from './images/square-5.jpg?as=withColor';

  import project from './project';
</script>

<Intro {project} />

<FullBleed image={fullBleed1Image} />

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image src={elevation1Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={elevation2Image} alt="TBD" />
  {/snippet}
</SplitView>

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image src={section1Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={section2Image} alt="TBD" />
  {/snippet}
</SplitView>

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image
      src={square5Image}
      alt="An overhead tree casts a summer-time shadow across the corrugated roof"
    />
  {/snippet}
  {#snippet right()}
    <FourImages
      src1={square2Image}
      alt1="A closeup on the wood joinery supporting the roof, dappled with raindrops"
      src2={square4Image}
      alt2="The roof hangs overhead, with tree branches whose leaves have been lost for the winter hanging further overhead"
      src3={square1Image}
      alt3="A girl sits on a chair, sheltered from the leaves in the fall"
      src4={square3Image}
      alt4="A view through the space between the rafters and collar ties, from one end of the structure to the other"
    />
  {/snippet}
</SplitView>

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image src={plan1Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={plan2Image} alt="TBD" />
  {/snippet}
</SplitView>

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image src={plan3Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={plan4Image} alt="TBD" />
  {/snippet}
</SplitView>

<FullBleed image={fullBleed4Image} />

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image src={construction1Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={construction2Image} alt="TBD" />
  {/snippet}
</SplitView>

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image src={construction3Image} alt="TBD" />
  {/snippet}
  {#snippet right()}
    <Image src={construction4Image} alt="TBD" />
  {/snippet}
</SplitView>

<FullBleed image={fullBleed2Image} />

<SplitView align="center" spacing="1|1">
  {#snippet left()}
    <Image
      src={roofSummerImage}
      alt="An overhead tree casts a summer-time shadow across the corrugated roof"
    />
  {/snippet}
  {#snippet right()}
    <Image
      src={roofWinterImage}
      alt="Snow clings to the corrugated roof, with patches of snow which have fallen off from their own weight, forming interesting patterns"
    />
  {/snippet}
</SplitView>

<FullBleed image={fullBleed3Image} />

<NextProject {project} />
