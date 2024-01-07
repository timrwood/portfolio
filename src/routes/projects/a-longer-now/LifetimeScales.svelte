<script lang="ts">
  import icon1Image from './images/icon-1.png';
  import icon2Image from './images/icon-2.png';
  import icon3Image from './images/icon-3.png';
  import icon4Image from './images/icon-4.png';
  import icon5Image from './images/icon-5.png';
  import icon6Image from './images/icon-6.png';
  import icon7Image from './images/icon-7.png';
  import icon8Image from './images/icon-8.png';

  let icons = [
    { space: 'Room', time: 'Individual', image: icon1Image },
    { space: 'Building', time: 'Family', image: icon2Image },
    { space: 'Street', time: 'Tribe', image: icon3Image },
    { space: 'City', time: 'Nation', image: icon4Image },
    { space: 'Country', time: 'Culture', image: icon5Image },
    { space: 'Planet', time: 'Species', image: icon6Image },
    { space: 'Galaxy', time: 'Ecosystem', image: icon7Image },
    { space: 'Universe', time: 'Eternity', image: icon8Image }
  ];
</script>

<div class="flex items-center justify-around">
  <div class="text-l pr-4 text-right font-bold w-1/2">Scale of Spaces</div>
  <div class="w-16"></div>
  <div class="text-l pl-4 text-left font-bold w-1/2">Scale of Lifetimes</div>
</div>
{#each icons as icon}
  <div class="flex items-center justify-around py-2">
    <div class="font-serif text-m italic pr-4 text-right w-1/2">{icon.space}</div>
    <img src={icon.image} alt="Pen drawing of {icon.space}" class="w-16 h-16" />
    <div class="font-serif text-m italic pl-4 text-left w-1/2">{icon.time}</div>
  </div>
{/each}
