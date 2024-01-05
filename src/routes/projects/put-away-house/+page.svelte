<script lang="ts">
  import { Intro, FullBleed } from '$lib/projects/index';

  import fullBleedImage1 from './full-bleed-1.jpg';

  import { intro } from './data';
</script>

<Intro {intro} />

<FullBleed image={fullBleedImage1} />
