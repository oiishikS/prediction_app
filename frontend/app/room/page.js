"use client";

import { useMemo, useState } from "react";

const windowOptions = ["1 ball", "3 balls", "1 over", "2 overs", "4 balls", "5 balls"];
const eventOptions = ["Six", "Four", "Wicket", "Wide", "No Ball"];

const conversationBubbles = [
  {
    id: 1,
    user: "Sumit",
    text: "there will be a Six in next 4 balls",
    time: "2m ago",
    side: "left",
    tone: "bg-[#f1effc] border-[#e1ddfb]",
    wrapClass: "max-w-[78%] md:max-w-[52%]",
  },
  {
    id: 2,
    user: "Nutan",
    text: "there will be a Wicket in next 5 balls",
    time: "1m ago",
    side: "left",
    tone: "bg-[#eef9f6] border-[#cdeee4]",
    wrapClass: "max-w-[82%] md:max-w-[55%] md:ml-8 mt-14",
  },
  {
    id: 3,
    user: "Rahul",
    text: "there will be a Four in next 1 over",
    time: "Just now",
    side: "left",
    tone: "bg-[#f4f1fe] border-[#ddd6fe]",
    wrapClass: "max-w-[72%] md:max-w-[48%] mt-16",
  },
  {
    id: 4,
    user: "I",
    text: "there will be a Six in the next 1 ball",
    time: "Just now",
    side: "right",
    tone: "bg-[linear-gradient(145deg,#ede9fe,#f5f3ff)] border-[#cec4ff]",
    wrapClass: "max-w-[80%] md:max-w-[50%] self-end mt-14 md:mt-10",
  },
  {
    id: 5,
    user: "Oishik",
    text: "there will be a Wide in next 2 overs",
    time: "Now",
    side: "left",
    tone: "bg-[#f2f8ff] border-[#d7e7ff]",
    wrapClass: "max-w-[74%] md:max-w-[47%] mt-16 md:mt-12 md:ml-4",
  },
];

const roomMembers = ["SO", "NU", "RA", "OI"];

export default function CricketPredictionRoomPage() {
  const [selectedWindow, setSelectedWindow] = useState("1 ball");
  const [selectedEvent, setSelectedEvent] = useState("Six");
  const [showWindowMenu, setShowWindowMenu] = useState(true);
  const [showEventMenu, setShowEventMenu] = useState(true);

  const predictionSentence = useMemo(
    () => `In next ${selectedWindow} there will be ${selectedEvent}`,
    [selectedWindow, selectedEvent]
  );

  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] px-2 py-3 sm:px-5 sm:py-6">
      <main className="mx-auto w-full max-w-5xl overflow-hidden rounded-[26px] border border-[color-mix(in_oklab,var(--color-brand-ink),white_82%)] bg-[#f7f6fc] shadow-[0_28px_58px_-32px_rgba(47,27,87,0.65)]">
        <header className="relative overflow-hidden bg-[linear-gradient(145deg,#1a1545,#24205d)] px-4 pb-4 pt-4 text-white sm:px-6">
          <div className="absolute -right-10 -top-8 h-24 w-24 rounded-full bg-[#5b4df7]/30 blur-xl" />
          <div className="absolute -bottom-8 left-10 h-20 w-20 rounded-full bg-[#2dd4bf]/20 blur-xl" />

          <div className="relative flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/72">
                Cricket Prediction Room
              </p>
              <h1 className="mt-1 text-[34px] font-black leading-none tracking-tight sm:text-[40px]">
                A vs B • 16th April
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  LIVE
                </span>
                <span className="text-white/70">18.2 ov • India chasing 176</span>
              </div>
            </div>

            <div className="relative mt-1 flex items-center gap-1.5">
              <div className="flex -space-x-2">
                {roomMembers.map((member) => (
                  <span
                    key={member}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1e1853] bg-[linear-gradient(145deg,#c4b5fd,#7c3aed)] text-[10px] font-bold text-white"
                  >
                    {member}
                  </span>
                ))}
              </div>
              <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-white/14 px-2 text-xs font-bold text-white">
                23
              </span>
              <button
                type="button"
                aria-label="Room info"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/14 text-white transition hover:bg-white/20"
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

        <section className="relative min-h-[48vh] bg-[#fbfaff] px-4 py-5 sm:min-h-[56vh] sm:px-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(139,92,246,0.08),transparent_36%),radial-gradient(circle_at_86%_72%,rgba(45,212,191,0.08),transparent_34%)]" />

          <div className="relative flex flex-col">
            {conversationBubbles.map((bubble) => {
              const isMe = bubble.side === "right";
              return (
                <article
                  key={bubble.id}
                  className={`${bubble.wrapClass} ${isMe ? "ml-auto" : "mr-auto"}`}
                >
                  <div
                    className={`relative rounded-2xl border px-4 py-3 shadow-[0_10px_20px_-16px_rgba(47,27,87,0.55)] ${bubble.tone}`}
                  >
                    <span
                      className={`absolute top-5 h-3.5 w-3.5 rotate-45 border ${
                        bubble.tone
                      } ${
                        isMe
                          ? "-right-[7px] border-l-0 border-t-0"
                          : "-left-[7px] border-r-0 border-b-0"
                      }`}
                    />
                    <p
                      className={`text-sm font-semibold ${
                        isMe ? "text-indigo-600" : "text-[var(--color-brand-primary)]"
                      }`}
                    >
                      {isMe ? "I" : bubble.user} predicted
                    </p>
                    <p className="mt-1 text-[clamp(15px,2.2vw,24px)] font-medium leading-snug text-[var(--color-brand-ink)]">
                      {bubble.text}
                    </p>
                  </div>
                  <p
                    className={`mt-2 text-xs text-[color-mix(in_oklab,var(--color-brand-ink),white_45%)] ${
                      isMe ? "text-right" : ""
                    }`}
                  >
                    {bubble.time}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="relative border-t border-[color-mix(in_oklab,var(--color-brand-ink),white_82%)] bg-[#f3f2fb] px-4 pb-4 pt-4 sm:px-6">
          <div className="rounded-2xl border border-white/75 bg-white/70 p-4 shadow-[0_16px_24px_-18px_rgba(47,27,87,0.58)] backdrop-blur-sm">
            <div className="flex flex-wrap items-start gap-x-3 gap-y-3 text-[32px] font-black leading-tight tracking-tight text-[#171527] sm:text-[38px]">
              <span>In next</span>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowWindowMenu((current) => !current)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#ddd9fb] bg-white px-3 py-2 text-[22px] font-semibold text-[var(--color-brand-ink)] shadow-sm sm:text-[24px]"
                >
                  {selectedWindow}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  >
                    <path fill="currentColor" d="m7 10 5 5 5-5H7Z" />
                  </svg>
                </button>
                {showWindowMenu ? (
                  <div className="absolute left-0 top-[calc(100%+8px)] z-20 w-36 rounded-2xl border border-[#e5e1fc] bg-white p-1.5 shadow-[0_12px_22px_-14px_rgba(47,27,87,0.58)]">
                    {windowOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelectedWindow(option)}
                        className={`block w-full rounded-xl px-2.5 py-2 text-left text-sm font-semibold transition ${
                          selectedWindow === option
                            ? "bg-[var(--color-brand-primary-soft)] text-[var(--color-brand-primary)]"
                            : "text-[var(--color-brand-ink)] hover:bg-[#f3f1ff]"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <span>there will be</span>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowEventMenu((current) => !current)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#ddd9fb] bg-white px-3 py-2 text-[22px] font-semibold text-[var(--color-brand-ink)] shadow-sm sm:text-[24px]"
                >
                  {selectedEvent}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  >
                    <path fill="currentColor" d="m7 10 5 5 5-5H7Z" />
                  </svg>
                </button>
                {showEventMenu ? (
                  <div className="absolute left-0 top-[calc(100%+8px)] z-20 w-40 rounded-2xl border border-[#e5e1fc] bg-white p-1.5 shadow-[0_12px_22px_-14px_rgba(47,27,87,0.58)]">
                    {eventOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelectedEvent(option)}
                        className={`block w-full rounded-xl px-2.5 py-2 text-left text-sm font-semibold transition ${
                          selectedEvent === option
                            ? "bg-[var(--color-brand-primary-soft)] text-[var(--color-brand-primary)]"
                            : "text-[var(--color-brand-ink)] hover:bg-[#f3f1ff]"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <button
                type="button"
                aria-label="Submit prediction"
                className="ml-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(145deg,#7c3aed,#5b4df7)] text-white shadow-[0_14px_20px_-10px_rgba(91,77,247,0.8)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_24px_-10px_rgba(91,77,247,0.82)] sm:h-16 sm:w-16"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                  <path fill="currentColor" d="m4 12 1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12 12 4l-8 8Z" />
                </svg>
              </button>
            </div>

            <p className="mt-4 text-sm font-medium text-[color-mix(in_oklab,var(--color-brand-ink),white_28%)]">
              {predictionSentence}
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-[color-mix(in_oklab,var(--color-brand-ink),white_40%)]">
            <span className="inline-flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2 4 5v6c0 5.05 3.41 9.74 8 11 4.59-1.26 8-5.95 8-11V5l-8-3Zm0 9.99h6c-.46 3.57-2.81 6.75-6 7.83v-7.83H6V6.3l6-2.25v7.94Z"
                />
              </svg>
              Only one active prediction allowed at a time.
            </span>
            <button type="button" className="font-semibold text-[var(--color-brand-primary)]">
              How it works?
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
