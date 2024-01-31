<script>
  import { SplitView, Image } from '$lib/projects';
  import LinkedInLogo from './LinkedInLogo.svelte';
  import InstagramLogo from './InstagramLogo.svelte';
  import DribbbleLogo from './DribbbleLogo.svelte';
  import GitHubLogo from './GitHubLogo.svelte';

  import profileImage from './images/profile.jpg?as=withColor';

  import categories, { nowPercent } from './events';
</script>

<svelte:head>
  <title>Tim Wood | About Me</title>
</svelte:head>

<SplitView spacing="1|2">
  <div slot="left">
    <Image src={profileImage} alt="A portrait of Tim Wood" />
    <div class="flex pt-12 justify-center">
      <a href="https://www.linkedin.com/in/trwood/" class="p-3 hover:text-slate-600">
        <LinkedInLogo />
      </a>
      <a href="https://www.instagram.com/timrwood" class="p-3 hover:text-slate-600">
        <InstagramLogo />
      </a>
      <a href="https://dribbble.com/timrwood" class="p-3 hover:text-slate-600">
        <DribbbleLogo />
      </a>
      <a href="https://github.com/timrwood" class="p-3 hover:text-slate-600">
        <GitHubLogo />
      </a>
    </div>
  </div>
  <div slot="right">
    <h2 class="font-bold text-4xl pb-6 uppercase">Hi, I'm Tim</h2>
    <h3 class="font-bold text-2xl pb-6">A software developer who turned to architecture.</h3>
    <div class="space-y-6 font-serif max-w-prose leading-loose text-pretty">
      <p>
        My interest in a career in architecture began in high school, but unfortunately, I did not
        pursue it at that time. Instead, I studied film production and moved to Los Angeles to try
        my hand in the industry. In my spare time, I was painting and drawing, following lessons
        learned from an art tutor in my childhood. To show off my artwork, I learned how to build a
        website, and as I continued to build those skills, found work in web design and development.
      </p>
      <p>
        For a little over a decade, I worked as a software developer, all the while regretting not
        pursuing architecture. After my personal and professional life stabilized, I decided to go
        back to school. For the past six years, I've been studying full-time at UIC, first in
        undergrad and now at the graduate level, while also working full-time as a software
        developer to support myself and my family.
      </p>
      <p>I plan to graduate December 2024, and am looking forward to the start of a new career.</p>
    </div>
  </div>
</SplitView>

<div class="px-3">
  <h2 class="font-bold text-3xl pb-16 tracking-widest uppercase">Life Timeline</h2>

  <div class="sticky top-0 z-10 pb-2 pt-16 -mt-16 bg-slate-50 border-b border-slate-300">
    <div class="flex justify-between text-sm sm:text-base">
      <div>Birth</div>
      <div>Death (projected)</div>
    </div>
    <div class="flex justify-between font-bold">
      <div>0</div>
      <div>10</div>
      <div>20</div>
      <div>30</div>
      <div>40</div>
      <div>50</div>
      <div>60</div>
      <div>70</div>
      <div>80</div>
    </div>
  </div>

  {#each Object.values(categories) as category}
    <div style="padding-left:{nowPercent * 100}%;" class="ml-4 font-bold text-lg pt-8 pb-2">
      {category.name}
    </div>
    {#each Object.entries(category.groups) as [name, events]}
      <div
        class="relative h-6 text-xs/6 md:h-8 md:text-sm/8 lg:text-base/8 border-t border-slate-300 font-serif italic"
      >
        <div style="left:{nowPercent * 100}%;" class="absolute top-0 ml-4">
          {name}
        </div>
        {#each events as event}
          <div
            style="left:{event.startPercent * 100}%;right:{(1 - event.endPercent) * 100}%;"
            class="absolute top-0 bottom-0 bg-slate-300"
          />
        {/each}
      </div>
    {/each}
  {/each}
</div>
