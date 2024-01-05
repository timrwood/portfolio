<script lang="ts">
  import { Intro, Single, Double } from '$lib/projects/index';

  import large1Image from './large-1.jpg';
  import large2Image from './large-2.jpg';
  import large3Image from './large-3.jpg';

  import square1Image from './square-1.jpg';
  import square2Image from './square-2.jpg';

  import drawing1Image from './drawing-1.jpg';
  import drawing2Image from './drawing-2.jpg';

  import { intro } from './data';
</script>

<Intro {intro} />

<Single
  image={large3Image}
  description={[
    'At the end of the row of non-windows, a curiosity appears. A window has been re-punched, not quite aligned with the one that came before. The sill is two courses lower and two bricks to the left. A steel lintel eliminates the need for a reinforcing arch, aligning the window on all edges to the rectangular grid. This section of the building has an identity crisis, undecided on whether it wants to be a window or a wall.',
    "It's easy to argue that this window is an affront to architecture. The original vision of the facade has been deformed, patched by a tradesperson with mismatched bricks. The undesigned change of one architectural element has disturbed the architectural whole. It is a scar from a dodgy surgery and it is ugly.",
    'But it was never intended to be a cosmetic surgery. The needs of the occupants had changed, and the architecture no longer met those needs. A window cut into a bricked in window is not a sign of indecision, but is a chronology of multiple separate decisions over a larger timespan. The interior needed a wall where there was a window, and then later needed a window where there was a wall. The ugliness comes not from those decisions, but from the inflexibility of the material to adapt to changes. It is the brick that betrays itself.',
    'The weathering of brick, stone, wood, and other natural materials express age, allowing humans to participate in processes beyond their lifespan. The lichen on Stonehenge, the rough edges of missing stone of the Colosseum, and the greying wood of the doors of Notre Dame are all material properties that connect visitors across time. The bricked in window unintentionally distills this phenomena into a single architectural detail. Old and new are merged into a solidified material form, writing their history into a wall.',
    'Two points in time, bonded with a little bit of mortar.'
  ]}
/>

<Double image1={square1Image} image2={large2Image} />
<Double image1={large1Image} image2={square2Image} />
<Double image1={drawing1Image} image2={drawing2Image} spacing="third" />
