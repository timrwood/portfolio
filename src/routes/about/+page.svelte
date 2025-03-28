<script>
  import { SplitView, Image } from '$lib/projects';
  import LinkedInLogo from './LinkedInLogo.svelte';
  import InstagramLogo from './InstagramLogo.svelte';
  import BlueskyLogo from './BlueskyLogo.svelte';

  import profileImage from './images/profile.jpg?as=withColor';

  import categories, { nowPercent } from './events';
</script>

<svelte:head>
  <title>Tim Wood | About Me</title>
</svelte:head>

<SplitView spacing="1|2">
  <div slot="left">
    <Image src={profileImage} alt="A portrait of Tim Wood" className="rounded-full" />
    <div class="flex pt-12 justify-center">
      <a href="https://www.linkedin.com/in/trwood/" class="p-3 hover:text-slate-600">
        <LinkedInLogo />
      </a>
      <a href="https://www.instagram.com/timrwood" class="p-3 hover:text-slate-600">
        <InstagramLogo />
      </a>
      <a href="https://bsky.app/profile/timwood.work" class="p-3 hover:text-slate-600">
        <BlueskyLogo />
      </a>
    </div>
  </div>
  <div slot="right">
    <h2 class="font-bold text-4xl pb-6 uppercase">Hi, I'm Tim</h2>
    <h3 class="font-bold text-2xl pb-6">
      A designer on the path to becoming a licensed Architect.
    </h3>
    <div class="space-y-6 font-serif max-w-prose leading-loose text-pretty">
      <p>
        As someone who started pursuing architecture in earnest later in my career, I've had extra
        time to build up a robust set of skills and knowledge through my work in related fields.
      </p>
      <p>
        While living in Los Angeles, my years in the film industry trained my eye for careful
        observation and image composition while I was also developing hands-on technical skills in
        video editing and film production. When I joined a film advertising agency, I learned the
        art of managing client projects: how to work towards mutually agreed on milestones and
        decide when to accommodate client feedback directly or diplomatically suggest alternate
        creative solutions. In developing the digital presence for film projects, I learned the
        importance of clarity and cohesiveness in marketing.
      </p>
      <p>
        When I left the agency, I moved from the project-oriented advertising business model to a
        product-oriented software business model, giving me the opportunity to expand my technical
        skills beyond visual design to system design. I became deeply interested in understanding
        all the wiring and plumbing that makes websites and software work, and how to author and
        design those systems.
      </p>
      <p>
        Although my daily work was in software program design, I was also able to absorb industry
        knowledge in fields adjacent to architectural practice. At Sonder, I followed conversations
        on real estate portfolio management and business development within the hospitality sector.
        At Provide I observed how lenders evaluate the financial health of an owner looking to
        build, and gained insight into how construction loans are disbursed from the other side of
        the owner-architect relationship. With Lush Cocktails, I started an LLC for a side project,
        which became a crash course in business incorporation, bookkeeping, and other bureaucratic
        administrative tasks.
      </p>
      <p>
        When I eventually was able to study architecture, I was acting as the primary income earner
        for my spouse and young children, and continued to work in software development full-time
        throughout my education to support them. Through four years of undergrad and two years of
        grad school, I became an expert at time management, switching constantly between paid time
        at work, student time at school, parenting time at home, and personal time with my spouse.
        By treating my education as a marathon, not a sprint, I was able to retain financial
        stability, an intact marriage, and close relationships with my children. Perhaps most
        unusual, I managed to graduate summa cum laude without ever spending one of those infamous
        architecture-school all-nighters.
      </p>
      <p>
        As consolation for all the weekends I spent on coursework and final projects, I promised my
        children I would design and build a clubhouse for them at the end of my education. The 170
        square foot open-air a-frame (<a class="text-blue-500 underline" href="/projects/play-frame"
          >shown in more detail on my portfolio</a
        >) helped round out some practical skills not taught in academia. I learned to assemble a
        drawing set, commission surveys, pull permits, and schedule inspections. Other then getting
        a couple extra sets of hands for pouring concrete and raising rafters, I did all the
        construction myself, sweating it out with a manual post-hole digger, swinging a hammer at
        joist hangers, and cutting half-lap joinery with a circular saw. When my drawings lacked
        necessary dimensions, I performed an informal self-RFI of sorts, giving me a better sense of
        what dimensions and notes are important to include in a drawing set.
      </p>
      <p>
        Since graduation this past December, I've been making use of the spare time in the job
        search by making progress on the ARE. With one exam passed, and another pending, I'm eager
        to continue the next steps on the path to licensure.
      </p>
      <p>
        While I would have liked to start working in architecture earlier in my life, I am
        ultimately glad for the experiences that have made me who I am today, and for the broader
        set of skills that I can bring to the field. I am confident in my future contributing to
        both the field of architecture and the greater built environment, and am excited to find the
        role that will be the start of that journey.
      </p>
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
         ></div>
        {/each}
      </div>
    {/each}
  {/each}
</div>
