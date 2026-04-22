export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] px-4 py-8 sm:px-6 md:py-12">
      <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center justify-center">
        <section className="relative w-full overflow-hidden rounded-3xl bg-[var(--color-brand-surface)] p-6 shadow-[0_22px_48px_-20px_rgba(47,27,87,0.45),0_14px_24px_-16px_rgba(47,27,87,0.35)] ring-1 ring-white/70 sm:p-10">
          <div className="wave-blob absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[var(--color-brand-primary-soft)]/85" />
          <div className="wave-blob wave-blob-delay absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-[var(--color-brand-accent)]/25" />

          <h1 className="relative text-4xl font-black tracking-tight text-[var(--color-brand-ink)] sm:text-6xl">
            Called It.
          </h1>
          <p className="relative mt-4 max-w-xl text-sm leading-7 text-[color-mix(in_oklab,var(--color-brand-ink),white_34%)] sm:text-base">
            Your fun, friendly prediction game. Make bold picks, flex your win
            streak, and settle every debate with your crew.
          </p>

          <div className="relative mt-10">
            <button
              aria-label="Continue with Google"
              title="Continue with Google"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
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
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
