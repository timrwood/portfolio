<script lang="ts">
  import { Description, Image, Intro, SplitView, NextProject } from '$lib/projects/index';

  import drawing1Image from './images/drawing-1.jpg';
  import drawing2Image from './images/drawing-2.jpg';
  import large1Image from './images/large-1.jpg';
  import large2Image from './images/large-2.jpg';
  import large3Image from './images/large-3.jpg';
  import square1Image from './images/square-1.jpg';
  import square2Image from './images/square-2.jpg';

  import project from './project';
</script>

<Intro {project} />

<SplitView align="center" spacing="1|1">
  <Description slot="right">
    <p>
      At the end of the row of non-windows, a curiosity appears. A window has been re-punched, not
      quite aligned with the one that came before. The sill is two courses lower and two bricks to
      the left. A steel lintel eliminates the need for a reinforcing arch, aligning the window on
      all edges to the rectangular grid. This section of the building has an identity crisis,
      undecided on whether it wants to be a window or a wall.
    </p>
    <p>
      It's easy to argue that this window is an affront to architecture. The original vision of the
      facade has been deformed, patched by a tradesperson with mismatched bricks. The undesigned
      change of one architectural element has disturbed the architectural whole. It is a scar from a
      dodgy surgery and it is ugly.
    </p>
    <p>
      But it was never intended to be a cosmetic surgery. The needs of the occupants had changed,
      and the architecture no longer met those needs. A window cut into a bricked in window is not a
      sign of indecision, but is a chronology of multiple separate decisions over a larger timespan.
      The interior needed a wall where there was a window, and then later needed a window where
      there was a wall. The ugliness comes not from those decisions, but from the inflexibility of
      the material to adapt to changes. It is the brick that betrays itself.
    </p>
    <p>
      The weathering of brick, stone, wood, and other natural materials express age, allowing humans
      to participate in processes beyond their lifespan. The lichen on Stonehenge, the rough edges
      of missing stone of the Colosseum, and the greying wood of the doors of Notre Dame are all
      material properties that connect visitors across time. The bricked in window unintentionally
      distills this phenomena into a single architectural detail. Old and new are merged into a
      solidified material form, writing their history into a wall.
    </p>
    <p>Two points in time, bonded with a little bit of mortar.</p>
  </Description>
  <Image slot="left" src={large3Image} alt="Four windows in a brick wall" />
</SplitView>

<SplitView align="bottom" spacing="2|1">
  <Image
    slot="left"
    src={drawing1Image}
    alt="A pen and ink drawing of four windows in a brick wall"
  />
  <Image slot="right" src={drawing2Image} alt="A pen and ink drawing of two bricked in windows" />
</SplitView>

<SplitView align="bottom" spacing="1|1">
  <Image
    slot="left"
    src={square1Image}
    alt="A glass block window in a previously bricked in window"
  />
  <Image
    slot="right"
    src={large2Image}
    alt="A large window cutting through a previously bricked in window"
  />
</SplitView>

<SplitView align="top" spacing="1|1">
  <Image
    slot="left"
    src={large1Image}
    alt="An entryway arch cutting through two previously bricked in windows"
  />
  <Image
    slot="right"
    src={square2Image}
    alt="A doorway cutting through a previously bricked in window"
  />
</SplitView>

<NextProject {project} />
