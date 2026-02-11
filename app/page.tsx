"use client";

import { useState } from "react";
import {
  shows,
  genreGradients,
  genreBadgeColors,
  getTotalVotes,
  getGreenlitCount,
  getTotalEpisodes,
} from "./data";
import type { Show, Genre, ShowStatus } from "./data";

function formatNumber(num: number): string {
  return num.toLocaleString("en-US");
}

function getStatusBadge(status: ShowStatus) {
  const map: Record<ShowStatus, { label: string; classes: string }> = {
    greenlit: {
      label: "Greenlit",
      classes: "bg-greenlit/15 text-greenlit border-greenlit/30",
    },
    voting: {
      label: "Voting",
      classes: "bg-voting/15 text-voting border-voting/30",
    },
    cancelled: {
      label: "Cancelled",
      classes: "bg-cancelled/15 text-cancelled border-cancelled/30",
    },
  };
  return map[status];
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface px-6 py-5 sm:px-8">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-glow text-accent">
        {icon}
      </div>
      <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {value}
      </p>
      <p className="text-sm font-medium text-muted">{label}</p>
    </div>
  );
}

function ShowCard({
  show,
  votes,
  onVote,
  index,
}: {
  show: Show;
  votes: number;
  onVote: () => void;
  index: number;
}) {
  const [isVoting, setIsVoting] = useState(false);
  const percentage = Math.min(
    Math.round((votes / show.greenlitThreshold) * 100),
    100
  );
  const statusBadge = getStatusBadge(show.status);
  const gradient = genreGradients[show.genre];
  const genreBadge = genreBadgeColors[show.genre];

  function handleVote() {
    setIsVoting(true);
    onVote();
    setTimeout(() => setIsVoting(false), 300);
  }

  return (
    <div
      className={`animate-fade-in stagger-${index + 1} group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-border-light hover:shadow-lg hover:shadow-accent-glow`}
    >
      {/* Genre gradient header */}
      <div className={`relative h-28 bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span
            className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${genreBadge}`}
          >
            {show.genre}
          </span>
          <span
            className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${statusBadge.classes}`}
          >
            {statusBadge.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-2">
        <div>
          <h3 className="text-lg font-bold text-foreground">{show.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-light">
            {show.logline}
          </p>
        </div>

        {/* Episode count */}
        <div className="flex items-center gap-1.5 text-xs text-muted">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <span>
            {show.episodes.length}{" "}
            {show.episodes.length === 1 ? "episode" : "episodes"}
          </span>
        </div>

        {/* Vote progress */}
        <div className="mt-auto space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-muted-light">
              {formatNumber(votes)} / {formatNumber(show.greenlitThreshold)}{" "}
              votes
            </span>
            <span className="font-bold text-accent">{percentage}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-accent transition-all duration-500 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Vote button */}
        <button
          onClick={handleVote}
          className={`mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover active:scale-95 ${
            isVoting ? "animate-pulse-vote" : ""
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          Vote
        </button>
      </div>
    </div>
  );
}

function LeaderboardRow({
  rank,
  show,
  votes,
}: {
  rank: number;
  show: Show;
  votes: number;
}) {
  const genreBadge = genreBadgeColors[show.genre];
  const statusBadge = getStatusBadge(show.status);

  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:bg-surface-hover">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-glow text-sm font-bold text-accent">
        {rank}
      </div>
      <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
        <h4 className="font-semibold text-foreground">{show.title}</h4>
        <div className="flex items-center gap-2">
          <span
            className={`rounded border px-2 py-0.5 text-xs font-medium ${genreBadge}`}
          >
            {show.genre}
          </span>
          <span
            className={`rounded border px-2 py-0.5 text-xs font-medium ${statusBadge.classes}`}
          >
            {statusBadge.label}
          </span>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-foreground">
          {formatNumber(votes)}
        </p>
        <p className="text-xs text-muted">votes</p>
      </div>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
  icon,
}: {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-surface px-6 py-8 text-center transition-colors hover:border-border-light hover:bg-surface-hover">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-glow text-accent">
        {icon}
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-accent">
        Step {step}
      </span>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-light">{description}</p>
    </div>
  );
}

export default function Home() {
  const [voteMap, setVoteMap] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    shows.forEach((show) => {
      initial[show.id] = show.votes;
    });
    return initial;
  });

  const totalVotes =
    getTotalVotes() +
    Object.keys(voteMap).reduce(
      (sum, id) => sum + (voteMap[id] - (shows.find((s) => s.id === id)?.votes ?? 0)),
      0
    );
  const greenlitCount = getGreenlitCount();
  const totalEpisodes = getTotalEpisodes();

  const sortedForLeaderboard = [...shows]
    .map((show) => ({ show, currentVotes: voteMap[show.id] ?? show.votes }))
    .sort((a, b) => b.currentVotes - a.currentVotes)
    .slice(0, 5);

  function handleVote(showId: string) {
    setVoteMap((prev) => ({
      ...prev,
      [showId]: (prev[showId] ?? 0) + 1,
    }));
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      {/* ========== HERO SECTION ========== */}
      <section className="flex flex-col items-center gap-8 pb-16 pt-16 text-center sm:pt-24">
        {/* Accent glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-96 -translate-x-1/2 rounded-full bg-accent-glow-strong blur-3xl" />

        <div className="relative flex flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-glow px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Season 1 Live
          </span>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            The Audience Is{" "}
            <span className="text-accent">the Network</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-light sm:text-lg">
            AI-generated shows get 5-minute pilot episodes dropped on social
            media. You vote on what gets greenlit. The audience decides
            everything.
          </p>
        </div>

        {/* Stat counters */}
        <div className="relative grid w-full max-w-2xl grid-cols-3 gap-3 sm:gap-4">
          <StatCard
            label="Total Votes"
            value={formatNumber(totalVotes)}
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            }
          />
          <StatCard
            label="Greenlit"
            value={String(greenlitCount)}
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            }
          />
          <StatCard
            label="Episodes"
            value={String(totalEpisodes)}
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            }
          />
        </div>
      </section>

      {/* ========== SHOW GRID ========== */}
      <section className="pb-20">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              All Shows
            </h2>
            <p className="mt-1 text-sm text-muted">
              {shows.length} pilots competing for a full season
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shows.map((show, index) => (
            <ShowCard
              key={show.id}
              show={show}
              votes={voteMap[show.id] ?? show.votes}
              onVote={() => handleVote(show.id)}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* ========== LEADERBOARD SECTION ========== */}
      <section className="pb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Leaderboard
          </h2>
          <p className="mt-1 text-sm text-muted">
            Top 5 shows by total votes
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {sortedForLeaderboard.map((item, index) => (
            <LeaderboardRow
              key={item.show.id}
              rank={index + 1}
              show={item.show}
              votes={item.currentVotes}
            />
          ))}
        </div>
      </section>

      {/* ========== HOW IT WORKS SECTION ========== */}
      <section className="pb-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How It Works
          </h2>
          <p className="mt-2 text-sm text-muted">
            Three steps. No executives. Just you.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <StepCard
            step="1"
            title="Pilots Drop"
            description="5-minute AI-generated pilot episodes drop across TikTok, X, YouTube, and Instagram. Every show starts equal."
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            }
          />
          <StepCard
            step="2"
            title="You Vote"
            description="Viewers vote on the shows they want more of. Every vote counts. No algorithms picking winners, just the audience."
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            }
          />
          <StepCard
            step="3"
            title="Shows Get Greenlit"
            description="Top-voted pilots hit the greenlit threshold and get full seasons produced. The audience is the network."
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            }
          />
        </div>
      </section>
    </div>
  );
}
