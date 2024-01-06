<script lang="ts">
  import { Intro, FullBleed, Single, Double, Quadtuple, Video } from '$lib/projects/index';

  import fullBleed1Image from './full-bleed-1.jpg';
  import fullBleed2Image from './full-bleed-2.jpg';

  import centeredImage from './centered.jpg';
  import overheadImage from './overhead.jpg';

  import historyImage from './history.png';
  import namesImage from './names.png';

  import small1Image from './small-1.jpg';
  import small2Image from './small-2.jpg';
  import small3Image from './small-3.jpg';
  import small4Image from './small-4.jpg';

  // import large1Image from './large-1.jpg';
  // import large2Image from './large-2.jpg';
  // import large3Image from './large-3.jpg';

  // import square1Image from './square-1.jpg';
  // import square2Image from './square-2.jpg';

  // import drawing1Image from './drawing-1.jpg';
  // import drawing2Image from './drawing-2.jpg';

  import { intro } from './data';
  import LifetimeScales from './LifetimeScales.svelte';
</script>

<Intro {intro} />

<FullBleed image={fullBleed1Image} />

<Video id="zRU_-CaUI_E" />

<LifetimeScales
  description={[
    'How far do you think about the future? To the end of the day, the next payday, the end of the year, or the end of your life? To the lifetime of your children or grand children? The end of your nation, the dissolution of your culture, or the evolution from your species to the next? The collapse of the sun and life on earth? The death of the universe?',
    '<i>A Longer Now</i> considers time not as a series of moments, but as an classification of lifetimes of increasingly larger scales. A room exists within a building, within a city, within a planet, within a galaxy in infinite space. Time can also be subdivided into progressively larger lifetimes. The individual within a family, within a tribe, within a nation, within a culture, within a species, within a web of life among eternity.'
  ]}
/>

<Quadtuple
  image1={small1Image}
  image2={small2Image}
  image3={small3Image}
  image4={small4Image}
  description={[
    'As the scale of time increases, it becomes more difficult to reason about and hold in the mind. The project collapses a period of ten thousand years into an approachable scale. It looks back five thousand years to the start of recorded history and provides the opportunity to look five thousand years into the future. Time is measured not in years, but in human generations, roughly a quarter century between the birth of a parent and the birth of their child. Measured this way, these ten thousand years are represented by four hundred generations, 200 tokens of the past and 200 placeholders for the future.',
    'In order to represent multiple time scales, the tokens are composed of a name etched into a material. Much like the name on a tombstone represents the life of the body buried below, the association of a name to a marker represents the time scale of an individual. The proximity between three successive markers represents the lifetime of a family, first as a child and grandchild to the generations before, then as a child and parent, and finally as a parent and grandparent. Beyond the family, the language and alphabet represent the lifetime of a nation and a culture.'
  ]}
/>

<Single
  image={historyImage}
  direction="right"
  description={[
    'This project is not intended to be a canonical representation of history. There are billions of humans alive today, containing multitudes of branching lineages across families and nations and cultures. The specific nations, names, and cultures were chosen to communicate the idea of a longer now from the author’s perspective. The names closest to the present were chosen from the most popular names of their generation in the United States, intended to be familiar names of nieces, friends, and grandmothers. If the project were developed by another author, or in another culture, an entirely different set of names would be chosen to communicate the effect. It is not a project of separating humanity across cultures, but about uniting humanity across time.',
    'The lifetime of the human species is reflected in the materiality of the tokens, an index of the capabilities of humanity to extract and process matter from our environment. Early generations took rocks and clay and wood grown from the earth. Copper, bronze, and iron were dug up and melted and mixed into alloys. Sand was cast into glass, concrete was discovered and lost and rediscovered, and oil was extracted, refined, and plasticized. Each generation carried the knowledge of the former until new processes and techniques unlocked materials with new qualities. It is an effort shared by the lifetime of the human species.'
  ]}
/>

<Single
  image={centeredImage}
  description={[
    'Humans have been warning of the impending end of humanity for thousands of years. We’ve been on the verge of the events of the Book of Revelations for two thousand years, each generation convinced that they have reached the apex and can only be followed by apocalypse. It is more interesting to think beyond the self, to consider at the same time the concerns of the children, the concerns of the children’s children, the concerns of the successors after the fall of our nation, and the concerns of the species that evolves from our own. We are not the only ones on our planet and we are not the only ones in our planet’s lifetime.',
    '<i>The end is not nigh.</i>'
  ]}
/>

<Double image1={namesImage} image2={overheadImage} />

<FullBleed image={fullBleed2Image} />
