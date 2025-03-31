<script>
  import { SplitView, Image } from '$lib/projects';
  import LinkedInLogo from './LinkedInLogo.svelte';
  import InstagramLogo from './InstagramLogo.svelte';
  import BlueskyLogo from './BlueskyLogo.svelte';
  import EventLog from './EventLog.svelte';

  import profileImage from './images/profile.jpg?as=withColor';
</script>

<svelte:head>
  <title>Tim Wood | About Me</title>
</svelte:head>

<SplitView spacing="1|2">
  {#snippet left()}
    <div>
      <Image src={profileImage} alt="A portrait of Tim Wood" className="rounded-full" />
      <div class="flex justify-center pt-12">
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
  {/snippet}
  {#snippet right()}
    <div>
      <h2 class="pb-6 text-4xl font-bold uppercase">Hi, I'm Tim</h2>
      <h3 class="pb-6 text-2xl font-bold">
        A designer on the path to becoming a licensed Architect.
      </h3>
      <div class="max-w-prose space-y-6 font-serif leading-loose text-pretty">
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
          knowledge in fields adjacent to architectural practice. At Sonder, I followed
          conversations on real estate portfolio management and business development within the
          hospitality sector. At Provide I observed how lenders evaluate the financial health of an
          owner looking to build, and gained insight into how construction loans are disbursed from
          the other side of the owner-architect relationship. With Lush Cocktails, I started an LLC
          for a side project, which became a crash course in business incorporation, bookkeeping,
          and other bureaucratic administrative tasks.
        </p>
        <p>
          When I eventually was able to study architecture, I was acting as the primary income
          earner for my spouse and young children, and continued to work in software development
          full-time throughout my education to support them. Through four years of undergrad and two
          years of grad school, I became an expert at time management, switching constantly between
          paid time at work, student time at school, parenting time at home, and personal time with
          my spouse. By treating my education as a marathon, not a sprint, I was able to retain
          financial stability, an intact marriage, and close relationships with my children. Perhaps
          most unusual, I managed to graduate summa cum laude without ever spending one of those
          infamous architecture-school all-nighters.
        </p>
        <p>
          As consolation for all the weekends I spent on coursework and final projects, I promised
          my children I would design and build a clubhouse for them at the end of my education. The
          170 square foot open-air a-frame (<a
            class="text-blue-500 underline"
            href="/projects/play-frame">shown in more detail on my portfolio</a
          >) helped round out some practical skills not taught in academia. I learned to assemble a
          drawing set, commission surveys, pull permits, and schedule inspections. Other then
          getting a couple extra sets of hands for pouring concrete and raising rafters, I did all
          the construction myself, sweating it out with a manual post-hole digger, swinging a hammer
          at joist hangers, and cutting half-lap joinery with a circular saw. When my drawings
          lacked necessary dimensions, I performed an informal self-RFI of sorts, giving me a better
          sense of what dimensions and notes are important to include in a drawing set.
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
          both the field of architecture and the greater built environment, and am excited to find
          the role that will be the start of that journey.
        </p>
      </div>
    </div>
  {/snippet}
</SplitView>

<EventLog />
