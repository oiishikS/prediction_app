"use client";

import { useMemo, useState } from "react";

const windowOptions = ["1 ball", "3 balls", "1 over", "2 overs"];
const eventOptions = ["wicket", "four", "six", "wide", "no ball"];

const feedItems = [
  {
    id: 1,
    user: "I",
    avatar: "I",
    window: "1 over",
    event: "wicket",
    time: "Just now",
    status: "LIVE",
    points: null,
  },
  {
    id: 2,
    user: "Oishik",
    avatar: "OI",
    window: "3 balls",
    event: "four",
    time: "10s ago",
    status: "LIVE",
    points: null,
  },
  {
    id: 3,
    user: "I",
    avatar: "I",
    window: "2 overs",
    event: "six",
    time: "1m ago",
    status: "WON",
    points: "+18 pts",
  },
  {
    id: 4,
    user: "Nisha",
    avatar: "NI",
    window: "1 ball",
    event: "wide",
    time: "2m ago",
    status: "MISSED",
    points: null,
  },
  {
    id: 5,
    user: "Kabir",
    avatar: "KA",
    window: "1 over",
    event: "wicket",
    time: "3m ago",
    status: "WON",
    points: "+22 pts",
  },
  {
    id: 6,
    user: "I",
    avatar: "I",
    window: "3 balls",
    event: "four",
    time: "5m ago",
    status: "MISSED",
    points: null,
  },
  {
    id: 7,
    user: "Maya",
    avatar: "MA",
    window: "2 overs",
    event: "six",
    time: "6m ago",
    status: "LIVE",
    points: null,
  },
  {
    id: 8,
    user: "Aarav",
    avatar: "AA",
    window: "1 over",
    event: "wicket",
    time: "7m ago",
    status: "WON",
    points: "+20 pts",
  },
  {
    id: 9,
    user: "I",
    avatar: "I",
    window: "1 ball",
    event: "no ball",
    time: "8m ago",
    status: "MISSED",
    points: null,
  },
];

const statusStyles = {
  LIVE: {
    card: "border-fuchsia-200/80 bg-fuchsia-50/70",
    badge:
      "bg-fuchsia-500/15 text-fuchsia-700 ring-1 ring-fuchsia-400/30 shadow-[0_0_0_1px_rgba(217,70,239,0.1)]",
    dot: "bg-fuchsia-500 animate-pulse",
  },
  WON: {
    card: "border-emerald-200/80 bg-emerald-50/70",
    badge: "bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-400/30",
    dot: "bg-emerald-500",
  },
  MISSED: {
    card: "border-rose-200/80 bg-rose-50/60",
    badge: "bg-rose-500/15 text-rose-700 ring-1 ring-rose-400/30",
    dot: "bg-rose-500",
  },
};

export default function CricketPredictionRoomPage() {
  const [selectedWindow, setSelectedWindow] = useState("1 over");
  const [selectedEvent, setSelectedEvent] = useState("wicket");

  // Keep one switch for realistic pre-match lock behavior.
  const isMatchStarted = true;

  const previewSentence = useMemo(
    () => `In next ${selectedWindow} there will be a ${selectedEvent}`,
    [selectedWindow, selectedEvent]
  );

  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] px-4 py-6 sm:px-6 md:py-10">
      <main className="mx-auto w-full max-w-4xl">
        <section className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-4 shadow-[0_28px_55px_-28px_rgba(47,27,87,0.55),0_10px_20px_-14px_rgba(47,27,87,0.3)] backdrop-blur-sm sm:p-6">
          <div className="wave-blob absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[var(--color-brand-primary-soft)]/90" />
          <div className="wave-blob wave-blob-delay absolute -bottom-14 -left-8 h-28 w-28 rounded-full bg-[var(--color-brand-accent)]/20" />

          <header className="relative rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[color-mix(in_oklab,var(--color-brand-ink),white_35%)]">
                  Cricket Prediction Room
                </p>
                <h1 className="mt-1 text-xl font-black text-[var(--color-brand-ink)] sm:text-2xl">
                  A vs B • 16th April
                </h1>
                <p className="mt-1 text-xs text-[color-mix(in_oklab,var(--color-brand-ink),white_36%)] sm:text-sm">
                  18.2 ov • India chasing 176
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-2.5 py-1 text-xs font-bold text-rose-700 ring-1 ring-rose-200">
                  <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                  LIVE
                </span>
                <button
                  type="button"
                  aria-label="Leaderboard"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand-primary-soft)] text-[var(--color-brand-ink)] shadow-sm ring-1 ring-white/80 transition hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M7 20h10v-2H7v2Zm-1-3h3V8H6v9Zm4 0h4V4h-4v13Zm5 0h3v-6h-3v6Z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Gang members"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand-primary-soft)] text-[var(--color-brand-ink)] shadow-sm ring-1 ring-white/80 transition hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3ZM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.98 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </header>

          <section className="relative mt-4 rounded-2xl border border-[color-mix(in_oklab,var(--color-brand-primary),white_72%)] bg-white/80 p-4 shadow-[0_14px_24px_-18px_rgba(47,27,87,0.7),0_8px_14px_-10px_rgba(47,27,87,0.35)] backdrop-blur-sm sm:p-5">
            <div
              className={`${
                isMatchStarted ? "hidden" : "flex"
              } absolute inset-0 z-10 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm`}
            >
              <p className="rounded-full bg-slate-800 px-4 py-2 text-xs font-semibold text-white">
                Predictions unlock when the match starts
              </p>
            </div>

            <p className="text-xs font-semibold uppercase tracking-wide text-[color-mix(in_oklab,var(--color-brand-ink),white_34%)]">
              Prediction composer
            </p>
            <h2 className="mt-1 text-lg font-bold text-[var(--color-brand-ink)] sm:text-xl">
              In next{" "}
              <span className="text-[var(--color-brand-primary)]">
                {selectedWindow}
              </span>{" "}
              there will be a{" "}
              <span className="text-[var(--color-brand-primary)]">
                {selectedEvent}
              </span>
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <p className="text-xs font-semibold text-[color-mix(in_oklab,var(--color-brand-ink),white_38%)]">
                  Time window
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {windowOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedWindow(option)}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${
                        selectedWindow === option
                          ? "bg-[var(--color-brand-primary)] text-white shadow-md"
                          : "bg-[var(--color-brand-primary-soft)] text-[var(--color-brand-ink)] hover:bg-[color-mix(in_oklab,var(--color-brand-primary-soft),white_10%)]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-[color-mix(in_oklab,var(--color-brand-ink),white_38%)]">
                  Event
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {eventOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedEvent(option)}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition sm:text-sm ${
                        selectedEvent === option
                          ? "bg-[var(--color-brand-accent)] text-[var(--color-brand-ink)] shadow-md"
                          : "bg-[color-mix(in_oklab,var(--color-brand-accent),white_78%)] text-[var(--color-brand-ink)] hover:bg-[color-mix(in_oklab,var(--color-brand-accent),white_70%)]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-[color-mix(in_oklab,var(--color-brand-primary),white_62%)] bg-white/75 px-3 py-2.5">
              <p className="text-sm font-medium text-[var(--color-brand-ink)]">
                {previewSentence}
              </p>
            </div>

            <button
              type="button"
              disabled={!isMatchStarted}
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[linear-gradient(145deg,var(--color-brand-primary),color-mix(in_oklab,var(--color-brand-primary),black_12%))] px-4 py-3 text-sm font-bold text-white shadow-[0_14px_22px_-14px_rgba(47,27,87,0.8)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_26px_-14px_rgba(47,27,87,0.85)] disabled:cursor-not-allowed disabled:opacity-55"
            >
              Submit Prediction
            </button>
            <p className="mt-2 text-xs text-[color-mix(in_oklab,var(--color-brand-ink),white_42%)]">
              Only one active prediction allowed at a time.
            </p>
          </section>

          <section className="relative mt-4 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-bold text-[var(--color-brand-ink)] sm:text-lg">
                Live prediction feed
              </h3>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                {feedItems.length} updates
              </span>
            </div>

            <div className="max-h-[52vh] space-y-2.5 overflow-y-auto pr-1 scroll-smooth">
              {feedItems.map((item) => {
                const style = statusStyles[item.status];
                const speaker = item.user === "I" ? "I predicted" : `${item.user} predicted`;
                const sentence = `there will be a ${item.event} in the next ${item.window}`;

                return (
                  <article
                    key={item.id}
                    className={`rounded-2xl border p-3 shadow-[0_10px_18px_-14px_rgba(47,27,87,0.4)] ${style.card}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-primary-soft)] text-xs font-bold text-[var(--color-brand-ink)]">
                        {item.avatar}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-semibold text-[var(--color-brand-ink)]">
                            {speaker}
                          </p>
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${style.badge}`}
                          >
                            <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                            {item.status}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-[color-mix(in_oklab,var(--color-brand-ink),white_24%)]">
                          {sentence}
                        </p>
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <span className="text-[color-mix(in_oklab,var(--color-brand-ink),white_48%)]">
                            {item.time}
                          </span>
                          {item.points ? (
                            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-bold text-emerald-700 ring-1 ring-emerald-400/25">
                              {item.points}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
