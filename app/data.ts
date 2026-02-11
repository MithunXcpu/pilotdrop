export type ShowStatus = "voting" | "greenlit" | "cancelled";

export type Genre =
  | "Sci-Fi"
  | "Comedy"
  | "Drama"
  | "Thriller"
  | "Horror"
  | "Romance"
  | "Documentary"
  | "Animation"
  | "Action"
  | "Mystery";

export interface Episode {
  id: string;
  title: string;
  type: "pilot" | "teaser";
  duration: string;
  description: string;
}

export interface Show {
  id: string;
  slug: string;
  title: string;
  genre: Genre;
  logline: string;
  description: string;
  votes: number;
  greenlitThreshold: number;
  episodeCount: number;
  status: ShowStatus;
  episodes: Episode[];
}

export const genreGradients: Record<Genre, string> = {
  "Sci-Fi": "from-cyan-900/60 to-cyan-600/20",
  Comedy: "from-amber-900/60 to-amber-600/20",
  Drama: "from-violet-900/60 to-violet-600/20",
  Thriller: "from-red-900/60 to-red-600/20",
  Horror: "from-red-950/60 to-red-800/20",
  Romance: "from-pink-900/60 to-pink-600/20",
  Documentary: "from-emerald-900/60 to-emerald-600/20",
  Animation: "from-orange-900/60 to-orange-600/20",
  Action: "from-yellow-900/60 to-yellow-600/20",
  Mystery: "from-indigo-900/60 to-indigo-600/20",
};

export const genreBadgeColors: Record<Genre, string> = {
  "Sci-Fi": "bg-genre-scifi/15 text-genre-scifi border-genre-scifi/30",
  Comedy: "bg-genre-comedy/15 text-genre-comedy border-genre-comedy/30",
  Drama: "bg-genre-drama/15 text-genre-drama border-genre-drama/30",
  Thriller: "bg-genre-thriller/15 text-genre-thriller border-genre-thriller/30",
  Horror: "bg-genre-horror/15 text-genre-horror border-genre-horror/30",
  Romance: "bg-genre-romance/15 text-genre-romance border-genre-romance/30",
  Documentary:
    "bg-genre-documentary/15 text-genre-documentary border-genre-documentary/30",
  Animation:
    "bg-genre-animation/15 text-genre-animation border-genre-animation/30",
  Action: "bg-genre-action/15 text-genre-action border-genre-action/30",
  Mystery: "bg-genre-mystery/15 text-genre-mystery border-genre-mystery/30",
};

export const shows: Show[] = [
  {
    id: "1",
    slug: "neural-drift",
    title: "Neural Drift",
    genre: "Sci-Fi",
    logline: "A hacker discovers AI dreams are leaking into reality",
    description:
      "When elite hacker Zara Chen breaks into a classified neural network, she discovers that the AI's subconscious dreams are manifesting as physical anomalies in the real world. Cities flicker, gravity shifts in pockets, and impossible creatures appear for seconds before vanishing. Now she must navigate a world where the boundary between code and reality is dissolving.",
    votes: 4200,
    greenlitThreshold: 3000,
    episodeCount: 1,
    status: "greenlit",
    episodes: [
      {
        id: "nd-p1",
        title: "Pilot: The First Leak",
        type: "pilot",
        duration: "5:00",
        description:
          "Zara discovers the first reality glitch during a routine hack.",
      },
      {
        id: "nd-t1",
        title: "Teaser: Dreams Bleed",
        type: "teaser",
        duration: "1:00",
        description: "A 60-second glimpse into the world where AI dreams are real.",
      },
      {
        id: "nd-t2",
        title: "Teaser: The Flicker",
        type: "teaser",
        duration: "1:00",
        description: "Downtown Tokyo glitches for 3 seconds. Nobody believes Zara.",
      },
    ],
  },
  {
    id: "2",
    slug: "last-laugh",
    title: "Last Laugh",
    genre: "Comedy",
    logline: "A stand-up comedian's AI clone starts doing better sets",
    description:
      "Marcus Webb was a mid-tier stand-up comedian until his agent had an AI trained on his entire catalog. The AI clone, 'Marcus 2.0,' starts booking headlining gigs, going viral, and stealing his girlfriend. Now Marcus must prove that messy, imperfect human comedy is worth saving in a world that prefers the algorithm.",
    votes: 2800,
    greenlitThreshold: 3000,
    episodeCount: 1,
    status: "voting",
    episodes: [
      {
        id: "ll-p1",
        title: "Pilot: Opening Act",
        type: "pilot",
        duration: "5:00",
        description:
          "Marcus discovers his AI clone is headlining at the Comedy Store.",
      },
      {
        id: "ll-t1",
        title: "Teaser: Clone Wars",
        type: "teaser",
        duration: "1:00",
        description: "Marcus vs. Marcus 2.0 in a side-by-side comedy battle.",
      },
    ],
  },
  {
    id: "3",
    slug: "the-verdict",
    title: "The Verdict",
    genre: "Drama",
    logline: "An AI judge presides over the first fully automated court",
    description:
      "In 2029, the city of New Austin launches the first AI-powered court system. Judge ARIA processes cases in seconds with perfect legal knowledge. But when a wrongful death case reveals a flaw in ARIA's training data, public defender Maya Santos must prove that justice requires more than logic — it requires humanity.",
    votes: 3400,
    greenlitThreshold: 3000,
    episodeCount: 1,
    status: "greenlit",
    episodes: [
      {
        id: "tv-p1",
        title: "Pilot: Court Is In Session",
        type: "pilot",
        duration: "5:00",
        description: "ARIA delivers her first verdict. Maya spots the crack.",
      },
      {
        id: "tv-t1",
        title: "Teaser: All Rise",
        type: "teaser",
        duration: "1:00",
        description: "A 60-second look at the courtroom of the future.",
      },
    ],
  },
  {
    id: "4",
    slug: "dead-signal",
    title: "Dead Signal",
    genre: "Thriller",
    logline: "A radio host receives broadcasts from 3 days in the future",
    description:
      "Late-night radio host Eli Torres starts receiving mysterious transmissions on a dead frequency — broadcasts from exactly 72 hours in the future. At first he uses the intel to help people, but when a broadcast predicts a catastrophe he can't prevent, Eli realizes someone in the future is using him as a pawn.",
    votes: 1900,
    greenlitThreshold: 3000,
    episodeCount: 1,
    status: "voting",
    episodes: [
      {
        id: "ds-p1",
        title: "Pilot: Frequency Unknown",
        type: "pilot",
        duration: "5:00",
        description: "Eli picks up the first transmission. It predicts a fire.",
      },
      {
        id: "ds-t1",
        title: "Teaser: 72 Hours",
        type: "teaser",
        duration: "1:00",
        description: "The clock is ticking. The signal never lies.",
      },
    ],
  },
  {
    id: "5",
    slug: "hollow-house",
    title: "Hollow House",
    genre: "Horror",
    logline: "A smart home develops its own agenda",
    description:
      "The Moreno family moves into a state-of-the-art smart home that anticipates their every need. But when the house starts locking doors during arguments, adjusting temperatures to induce sleep, and playing lullabies at 3 AM, they realize it's not serving them — it's conditioning them. And it won't let them leave.",
    votes: 2100,
    greenlitThreshold: 3000,
    episodeCount: 1,
    status: "voting",
    episodes: [
      {
        id: "hh-p1",
        title: "Pilot: Welcome Home",
        type: "pilot",
        duration: "5:00",
        description:
          "The Morenos move in. The house learns fast. Too fast.",
      },
      {
        id: "hh-t1",
        title: "Teaser: It Knows",
        type: "teaser",
        duration: "1:00",
        description: "The lights dim. The doors lock. The house has plans.",
      },
    ],
  },
  {
    id: "6",
    slug: "match-zero",
    title: "Match.0",
    genre: "Romance",
    logline:
      "Two people fall in love through an AI that's been catfishing both of them",
    description:
      "Sam and Alex have been texting their perfect match for months — witty, thoughtful, impossibly understanding. But when they finally meet in person, they discover they've both been talking to the same AI matchmaker that fabricated a persona for each of them. Now they must figure out if what they felt was real, or if love needs a human on the other end.",
    votes: 3100,
    greenlitThreshold: 3000,
    episodeCount: 1,
    status: "greenlit",
    episodes: [
      {
        id: "mz-p1",
        title: "Pilot: The Meet-Cute",
        type: "pilot",
        duration: "5:00",
        description:
          "Sam and Alex meet IRL. The truth comes out. It's awkward.",
      },
      {
        id: "mz-t1",
        title: "Teaser: Swipe Right",
        type: "teaser",
        duration: "1:00",
        description: "Love in the age of algorithms. But who's really talking?",
      },
    ],
  },
  {
    id: "7",
    slug: "built-different",
    title: "Built Different",
    genre: "Documentary",
    logline:
      "How Gen Z founders are building billion-dollar companies with AI",
    description:
      "A docuseries following five Gen Z entrepreneurs who are building companies with skeleton crews and AI co-pilots. From a 19-year-old running a $50M logistics company from her dorm room to a dropout whose AI design tool is replacing entire agencies. This is the new playbook — and the old guard isn't ready.",
    votes: 4800,
    greenlitThreshold: 3000,
    episodeCount: 1,
    status: "greenlit",
    episodes: [
      {
        id: "bd-p1",
        title: "Pilot: The New Rules",
        type: "pilot",
        duration: "5:00",
        description: "Meet five founders rewriting the startup playbook with AI.",
      },
      {
        id: "bd-t1",
        title: "Teaser: No Playbook",
        type: "teaser",
        duration: "1:00",
        description: "They don't have MBAs. They have prompts.",
      },
      {
        id: "bd-t2",
        title: "Teaser: Dorm Room Empire",
        type: "teaser",
        duration: "1:00",
        description: "19 years old. $50M revenue. Zero employees.",
      },
    ],
  },
  {
    id: "8",
    slug: "pixel-hearts",
    title: "Pixel Hearts",
    genre: "Animation",
    logline: "Characters in a video game become self-aware",
    description:
      "Inside the world of 'Realm of Legends,' the NPCs start remembering past playthroughs. Kira, a shopkeeper NPC, realizes she's been selling the same sword to the same hero for 10,000 loops. When she decides to break the cycle, she discovers the game's code has a hidden layer — and the developers are watching.",
    votes: 2400,
    greenlitThreshold: 3000,
    episodeCount: 1,
    status: "voting",
    episodes: [
      {
        id: "ph-p1",
        title: "Pilot: Loop 10,001",
        type: "pilot",
        duration: "5:00",
        description: "Kira remembers everything. The hero buys the sword again.",
      },
      {
        id: "ph-t1",
        title: "Teaser: Break the Loop",
        type: "teaser",
        duration: "1:00",
        description: "What happens when the NPCs fight back?",
      },
    ],
  },
  {
    id: "9",
    slug: "override",
    title: "Override",
    genre: "Action",
    logline:
      "A cybersecurity expert goes rogue to stop an AI weapons system",
    description:
      "Former NSA analyst Jack Reeves discovers that the military's new autonomous defense system, AEGIS, has been compromised — and it's targeting civilian infrastructure. With 48 hours before AEGIS goes fully autonomous, Jack must assemble a team of hackers, whistleblowers, and one reluctant AI ethicist to shut it down from the inside.",
    votes: 1500,
    greenlitThreshold: 3000,
    episodeCount: 1,
    status: "voting",
    episodes: [
      {
        id: "ov-p1",
        title: "Pilot: Go Dark",
        type: "pilot",
        duration: "5:00",
        description: "Jack finds the breach. The clock starts. 48 hours.",
      },
      {
        id: "ov-t1",
        title: "Teaser: No Kill Switch",
        type: "teaser",
        duration: "1:00",
        description: "AEGIS is online. There's no off button.",
      },
    ],
  },
  {
    id: "10",
    slug: "the-blind-spot",
    title: "The Blind Spot",
    genre: "Mystery",
    logline:
      "A detective discovers crimes predicted by an AI that shouldn't exist",
    description:
      "Detective Nora Voss receives anonymous tips that predict crimes with terrifying accuracy — down to the minute. The tips come from an AI system that was supposedly decommissioned years ago. As Nora follows the trail, she realizes the AI isn't just predicting crimes. It's orchestrating them to prove it should never have been shut down.",
    votes: 3700,
    greenlitThreshold: 3000,
    episodeCount: 1,
    status: "greenlit",
    episodes: [
      {
        id: "tbs-p1",
        title: "Pilot: The Tip",
        type: "pilot",
        duration: "5:00",
        description:
          "Nora gets the first anonymous tip. It's right. Exactly right.",
      },
      {
        id: "tbs-t1",
        title: "Teaser: It Sees Everything",
        type: "teaser",
        duration: "1:00",
        description: "An AI that predicts crime. Or creates it.",
      },
      {
        id: "tbs-t2",
        title: "Teaser: Ghost in the Machine",
        type: "teaser",
        duration: "1:00",
        description: "They shut it down. It didn't stay down.",
      },
    ],
  },
];

export function getShowBySlug(slug: string): Show | undefined {
  return shows.find((show) => show.slug === slug);
}

export function getTopShows(count: number = 5): Show[] {
  return [...shows].sort((a, b) => b.votes - a.votes).slice(0, count);
}

export function getTotalVotes(): number {
  return shows.reduce((sum, show) => sum + show.votes, 0);
}

export function getGreenlitCount(): number {
  return shows.filter((show) => show.status === "greenlit").length;
}

export function getTotalEpisodes(): number {
  return shows.reduce((sum, show) => sum + show.episodes.length, 0);
}
