<script lang="ts">
  import {
    Description,
    FourImages,
    FullBleed,
    Image,
    Intro,
    NextProject,
    SplitView,
    Video
  } from '$lib/projects/index';

  import square1Image from './images/square-1.jpg?as=withColor';
  import fullBleed1Image from './images/full-bleed-1.jpg?as=withColor';
  import square2Image from './images/square-2.jpg?as=withColor';
  import square3Image from './images/square-3.jpg?as=withColor';
  import square4Image from './images/square-4.jpg?as=withColor';
  import square5Image from './images/square-5.jpg?as=withColor';

  import project from './project';
</script>

<Intro {project} />

<FullBleed image={fullBleed1Image} />

<SplitView align="center" spacing="1|1">
  <FourImages
    slot="left"
    src1={square1Image}
    alt1="A brick material sample with the name 'Elizabet' engraved in it"
    src2={square2Image}
    alt2="A stainless steel material sample with the name 'Dorothy' engraved in it"
    src3={square3Image}
    alt3="A plastic material sample with the name 'Helen' engraved in it"
    src4={square4Image}
    alt4="A styrofoam material sample with the name 'Jennifer' engraved in it"
  />
  <Image
    slot="right"
    src={square5Image}
    alt="A graph of different cultures and material availibilities over time"
  />
</SplitView>


<NextProject {project} />
