export default function GangPage() {
  const members = [
    { name: "Aarav", badge: "Captain", score: 126 },
    { name: "Nisha", badge: "Hot Streak", score: 118 },
    { name: "Kabir", badge: "Wildcard", score: 105 },
    { name: "Maya", badge: "Rising", score: 97 },
  ];

  const leaderboard = [
    { rank: 1, name: "Aarav", points: 126 },
    { rank: 2, name: "Nisha", points: 118 },
    { rank: 3, name: "Kabir", points: 105 },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] px-4 py-8 sm:px-6 md:py-12">
      <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center justify-center">
        <section className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-[var(--color-brand-surface)] p-6 shadow-[0_22px_48px_-20px_rgba(47,27,87,0.45),0_14px_24px_-16px_rgba(47,27,87,0.35)] ring-1 ring-white/70 sm:p-10">
          <div className="wave-blob absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[var(--color-brand-primary-soft)]/85" />
          <div className="wave-blob wave-blob-delay absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-[var(--color-brand-accent)]/25" />

          <p className="relative inline-flex items-center rounded-full bg-[var(--color-brand-primary-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--color-brand-ink)]">
            Gang page
          </p>

          <h1 className="relative mt-4 text-3xl font-black tracking-tight text-[var(--color-brand-ink)] sm:text-5xl">
            Sunday Shockers
          </h1>
          <p className="relative mt-3 max-w-2xl text-sm leading-7 text-[color-mix(in_oklab,var(--color-brand-ink),white_34%)] sm:text-base">
            Your crew hub: track members, climb the leaderboard, and lock in your
            next prediction before kickoff.
          </p>

          <section className="relative mt-8 rounded-2xl border border-[color-mix(in_oklab,var(--color-brand-accent),white_55%)] bg-[linear-gradient(145deg,color-mix(in_oklab,var(--color-brand-accent),white_78%),white)] p-5 shadow-[0_16px_26px_-18px_rgba(19,126,112,0.6),0_6px_10px_-8px_rgba(19,126,112,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-wide text-[color-mix(in_oklab,var(--color-brand-ink),white_20%)]">
              Next match
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-black tracking-tight text-[var(--color-brand-ink)] sm:text-3xl">
                A vs B
              </h2>
              <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-[var(--color-brand-ink)] ring-1 ring-white/70">
                16:00 PM
              </span>
            </div>
            <p className="mt-2 text-sm text-[color-mix(in_oklab,var(--color-brand-ink),white_32%)]">
              Predictions close in 1h 08m. Lock your pick before kickoff.
            </p>
          </section>

          <section className="mt-4 rounded-2xl bg-[linear-gradient(145deg,var(--color-brand-primary),color-mix(in_oklab,var(--color-brand-primary),black_14%))] p-5 shadow-[0_16px_28px_-18px_rgba(47,27,87,0.78),0_8px_12px_-10px_rgba(47,27,87,0.5)]">
            <h2 className="text-base font-bold text-white sm:text-lg">
              Leaderboard
            </h2>
            <ul className="mt-4 space-y-2.5">
              {leaderboard.map((entry) => (
                <li
                  key={entry.rank}
                  className="flex items-center justify-between rounded-xl bg-white/16 px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">
                      {entry.rank}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {entry.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    {entry.points} pts
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-4 rounded-2xl border border-[color-mix(in_oklab,var(--color-brand-ink),white_78%)] bg-white p-5 shadow-[0_14px_24px_-18px_rgba(47,27,87,0.65),0_6px_10px_-8px_rgba(47,27,87,0.35)]">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-[var(--color-brand-ink)] sm:text-lg">
                Members
              </h2>
              <span className="rounded-full bg-[var(--color-brand-primary-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--color-brand-ink)]">
                {members.length} total
              </span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {members.map((member) => (
                <li
                  key={member.name}
                  className="flex items-center justify-between rounded-xl bg-[color-mix(in_oklab,var(--color-brand-primary-soft),white_55%)] px-3 py-2"
                >
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-brand-ink)]">
                      {member.name}
                    </p>
                    <p className="text-xs text-[color-mix(in_oklab,var(--color-brand-ink),white_38%)]">
                      {member.badge}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-[var(--color-brand-primary)]">
                    {member.score}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
    </div>
  );
}
