export default function Home() {
  const themeChips = [
    { name: "Lilac Pop", chipClass: "bg-[var(--calledit-primary-soft)]" },
    { name: "Peach Glow", chipClass: "bg-[var(--calledit-accent-soft)]" },
    { name: "Mint Splash", chipClass: "bg-[var(--calledit-mint-soft)]" },
  ];

  return (
    <div className="calledit-bg min-h-screen">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center p-4 md:p-8">
        <section className="glass-card relative w-full overflow-hidden rounded-3xl p-6 shadow-xl sm:p-8">
          <div className="wave-blob absolute -right-8 -top-10 h-28 w-28 rounded-full bg-[var(--calledit-primary-soft)]" />
          <div className="wave-blob wave-blob-delay absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-[var(--calledit-accent-soft)]" />

          <p className="relative inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--calledit-primary)]">
            <span className="wave-hand inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--calledit-primary-soft)] text-[10px] text-[var(--calledit-primary)]">
              o/
            </span>
            Page 1 - Landing
          </p>

          <h1 className="relative mt-5 text-4xl font-black tracking-tight text-[var(--calledit-ink)] sm:text-6xl">
            Called It.
          </h1>
          <p className="relative mt-4 max-w-xl text-sm leading-7 text-[var(--calledit-muted)] sm:text-base">
            Your fun, friendly prediction game. Make bold picks, flex your win
            streak, and settle every debate with your crew.
          </p>

          <div className="relative mt-6 flex flex-wrap gap-2">
            {themeChips.map((chip) => (
              <span
                key={chip.name}
                className={`${chip.chipClass} rounded-full px-3 py-1 text-xs font-semibold text-[var(--calledit-ink)]`}
              >
                {chip.name}
              </span>
            ))}
          </div>

          <div className="relative mt-8 max-w-md rounded-2xl bg-white p-4 shadow-md ring-1 ring-[var(--calledit-border)] sm:p-5">
            <h2 className="text-lg font-bold text-[var(--calledit-ink)]">
              Start with Google
            </h2>
            <p className="mt-1 text-sm text-[var(--calledit-muted)]">
              MVP login is Google-only for quick and simple onboarding.
            </p>
            <button className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--calledit-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95 active:scale-[0.99]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFC107"
                  d="M21.8 12.23c0-.78-.07-1.54-.2-2.27H12v4.3h5.5a4.7 4.7 0 0 1-2.04 3.08v2.56h3.3c1.93-1.78 3.04-4.4 3.04-7.67Z"
                />
                <path
                  fill="#FF3D00"
                  d="M12 22c2.75 0 5.06-.9 6.75-2.44l-3.3-2.56c-.92.62-2.09.99-3.45.99-2.65 0-4.9-1.8-5.7-4.2H2.9v2.65A10 10 0 0 0 12 22Z"
                />
                <path
                  fill="#4CAF50"
                  d="M6.3 13.79a6 6 0 0 1 0-3.58V7.56H2.9a10 10 0 0 0 0 8.88l3.4-2.65Z"
                />
                <path
                  fill="#1976D2"
                  d="M12 6.01c1.5 0 2.85.52 3.9 1.53l2.92-2.92A9.8 9.8 0 0 0 12 2a10 10 0 0 0-9.1 5.56l3.4 2.65c.8-2.4 3.05-4.2 5.7-4.2Z"
                />
              </svg>
              Continue with Google
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
